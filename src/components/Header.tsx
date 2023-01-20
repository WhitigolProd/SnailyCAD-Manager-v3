import React from 'react';
// Get the app version from the package.json
import { version } from '../../package.json';

export default function Header() {
    return (
        <header className="mb-8 flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold">SnailyCAD Manager</h1>
            <code id="appVersion" className="text-xs">
                v{version}
            </code>
        </header>
    );
}
