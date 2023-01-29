'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useCustomLog from '@/util/client/useCustomLog';
import Article from '../Article/Article';
import ArticleFooter from '../Article/ArticleFooter';
import Button from '@/components/Buttons/Button';
import Icon from '@/components/Buttons/Icon';
import Link from 'next/link';

const getCadVersion = async () => {
    const response = await axios.get('/api/cad/version');
    return response.data.version;
};

const checkForUpdates = async () => {
    const response = await axios.get(
        'https://raw.githubusercontent.com/SnailyCAD/snaily-cadv4/main/package.json'
    );
    return {
        updateAvailable: response.data.version !== (await getCadVersion()),
        latestVersion: response.data.version,
    };
};

export default function CadVersion() {
    const [cadVersion, setCadVersion] = useState('');
    const [cadUpdate, setCadUpdate] = useState(false);
    const [cadLatest, setCadLatest] = useState('');
    const [showUpdateDialog, setShowUpdateDialog] = useState(false);

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
            setCadUpdate(update.updateAvailable);
        };
        func();
        const interval = setInterval(func, 1000 * 60 * 30);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const func = async () => {
            const update = await checkForUpdates();
            setCadLatest(update.latestVersion);
        };
        func();
        const interval = setInterval(func, 1000 * 60 * 30);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (cadUpdate) {
            setShowUpdateDialog(true);
        }
    }, [cadUpdate]);

    const handleUpdateDialog = () => {
        setShowUpdateDialog(!showUpdateDialog);
    };

    return (
        <>
            <span>
                {!cadVersion ? (
                    <span className="!text-slate-500">Loading...</span>
                ) : (
                    <span>
                        v{cadVersion}
                        {cadUpdate ? (
                            <>
                                <span className="!text-yellow-500 animate-pulse">
                                    {' '}
                                    (v{cadLatest} Available)
                                </span>{' '}
                                <Link href="#" onClick={handleUpdateDialog}>
                                    <Icon IconName="info" className="mr-0.5" />
                                    View Info
                                </Link>
                            </>
                        ) : (
                            <span className="!text-green-500">
                                {' '}
                                (Up to date)
                            </span>
                        )}
                    </span>
                )}
            </span>
            <dialog open={showUpdateDialog}>
                <Article title="Update Available">
                    <p className="flex flex-col gap-2">
                        <span>A new version of SnailyCAD is available!</span>
                        <span>
                            Current Version:{' '}
                            <span className="text-yellow-500">
                                v{cadVersion}
                            </span>
                        </span>
                        <span>
                            Latest Version:{' '}
                            <span className="text-green-500">v{cadLatest}</span>
                        </span>
                        <span>
                            <Link
                                href={`https://github.com/SnailyCAD/snaily-cadv4/compare/${cadVersion}...${cadLatest}`}
                                target="_blank"
                            >
                                <Button style="info" size="sm">
                                    <Icon IconName="info" />
                                    <span>Compare Versions</span>
                                </Button>
                            </Link>
                        </span>
                    </p>
                    <ArticleFooter>
                        <Button
                            style="dark"
                            size="sm"
                            onClick={handleUpdateDialog}
                        >
                            <Icon IconName="close" />
                            <span>Close</span>
                        </Button>
                    </ArticleFooter>
                </Article>
            </dialog>
        </>
    );
}
