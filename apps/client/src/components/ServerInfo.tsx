import axios from 'axios';
import React, { useEffect, useState } from 'react';

async function getData() {
    const res = await axios.get('http://localhost:8081/server-info');
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
        <div className="fixed bottom-0 right-0 m-2 text-xs text-right bg-black bg-opacity-25 rounded-lg p-3">
            <p>Server Information</p>
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
