import axios from 'axios';
import React, { useEffect, useState } from 'react';

async function getData() {
    const res = await axios.get('/api/SystemInfo');
    if (res.status !== 200) {
        return {
            platform: 'Unknown',
            arch: 'Unknown',
        };
    }
    return res.data;
}

export default function MyComponent() {
    const [data, setData] = useState<{
        platform: string;
        arch: string;
    }>();

    useEffect(() => {
        async function fetchData() {
            const data = await getData();
            setData(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <p className="text-sm mb-1 underline">Host Info</p>
            {data ? (
                <div>
                    <div>Platform: {data.platform}</div>
                    <div>Arch: {data.arch}</div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}
