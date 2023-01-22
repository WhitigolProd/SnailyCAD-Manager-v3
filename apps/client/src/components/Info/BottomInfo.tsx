import React from 'react';
import AppInfo from './AppInfo';
import ServerInfo from './ServerInfo';

export default function BottomInfo() {
    return (
        <div className="fixed flex flex-col gap-2 bottom-0 right-0 m-2 rounded-lg p-2 bg-black bg-opacity-25 text-xs text-center">
            <AppInfo />
            <ServerInfo />
        </div>
    );
}
