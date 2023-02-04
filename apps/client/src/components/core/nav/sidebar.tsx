import { Aside, MediaQuery, Code } from '@mantine/core';
import React from 'react';

export default function AppSidebar() {
    return (
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
                <div className="flex flex-col items-center justify-center bg-black/10 rounded p-5 gap-2">
                    <h1 className="text-lg font-bold">SnailyCAD Status</h1>
                    {/* Status for Client & API */}
                    <div className="flex items-center justify-center gap-2">
                        <Code>
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span>Client</span>
                            </div>
                        </Code>
                        <Code>
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span>API</span>
                            </div>
                        </Code>
                    </div>
                </div>
            </Aside>
        </MediaQuery>
    );
}
