import React from 'react';
import os from 'os';

const getSystemInfo = async () => {
    const res = await fetch('/api/test');
    const data = await res.json();
    return data;
};

export default function SystemInfo() {
    // Get the system info from the API using the getSystemInfo function
    const sysinfo = getSystemInfo();

    return (
        <div className="fixed bottom-0 right-0 m-2 text-white text-opacity-50 text-xs">
            {sysinfo}
        </div>
    );
}
