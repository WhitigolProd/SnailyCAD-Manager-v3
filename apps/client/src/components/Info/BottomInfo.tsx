import React from 'react';
import AppInfo from './AppInfo';
import ServerInfo from './ServerInfo';

export default function BottomInfo() {
    return (
        <div className="flex flex-col gap-2 m-2 text-xs text-center">
            <AppInfo />
            <ServerInfo />
        </div>
    );
}
