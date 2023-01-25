'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useCustomLog from '@/util/client/useCustomLog';

const getCadVersion = async () => {
    const response = await axios.get('/api/cad/version');
    return response.data.version;
};

const checkForUpdates = async () => {
    const response = await axios.get(
        'https://api.github.com/repos/SnailyCAD/snaily-cadv4/releases/latest'
    );
    return response.data.tag_name > (await getCadVersion());
};

export default function CadVersion() {
    const [cadVersion, setCadVersion] = useState('');
    const [cadUpdate, setCadUpdate] = useState(false);

    useEffect(() => {
        const func = async () => {
            const version = await getCadVersion();
            setCadVersion(version);
        };
        func();
        const interval = setInterval(func, 5000);
        return () => clearInterval(interval);
    }, []);

    // Check once on load, then every 30 minutes
    useEffect(() => {
        const func = async () => {
            const update = await checkForUpdates();
            setCadUpdate(update);
        };
        func();
        const interval = setInterval(func, 1000 * 60 * 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <span>
            {!cadVersion ? (
                <span className="!text-slate-500">Loading...</span>
            ) : (
                <span>
                    v{cadVersion}
                    {cadUpdate ? (
                        <span className="!text-yellow-500 animate-pulse">
                            {' '}
                            (Update Available)
                        </span>
                    ) : (
                        <span className="!text-green-500"> (Up to date)</span>
                    )}
                </span>
            )}
        </span>
    );
}
