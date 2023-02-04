import { styles } from '@/styles/core';
import {
    Aside,
    MediaQuery,
    Code,
    UnstyledButton,
    Input,
    Kbd,
    Text,
} from '@mantine/core';
import { toggleSpotlight } from '@mantine/spotlight';
import Link from 'next/link';
import React from 'react';

interface AppSidebarProps {
    hidden: boolean;
}

export default function AppSidebar(props: AppSidebarProps) {
    return (
        <Aside
            p="md"
            hiddenBreakpoint="sm"
            width={{ sm: 200, lg: 300 }}
            hidden={props.hidden}
        >
            <div className="flex flex-col gap-4">
                <UnstyledButton
                    onClick={() => toggleSpotlight()}
                    className="flex justify-between items-center transition-colors ease-in-out bg-zinc-800 hover:bg-zinc-700 border-solid border-zinc-600 border-[1px] px-2 py-1 rounded-lg"
                >
                    <Text className="text-sm">Quick Command...</Text>
                    <div>
                        <Kbd>/</Kbd>
                    </div>
                </UnstyledButton>
                <div className="flex flex-col items-center justify-center bg-black/10 rounded p-5 gap-2">
                    <h1 className="text-lg font-bold">SnailyCAD Status</h1>
                    {/* Status for Client & API */}
                    <div className="flex items-center justify-center gap-2">
                        <Code color="green">
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span>Client</span>
                            </div>
                        </Code>
                        <Code color="green">
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span>API</span>
                            </div>
                        </Code>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center bg-black/10 rounded p-5 gap-2">
                    <h1 className="text-lg font-bold">SnailyCAD Access URL</h1>
                    {/* Access URl when CAD is Online (Client & API) */}
                    <p className="text-center">
                        When available, your CAD will be accessible from{' '}
                        <Link href="#" className={styles.link}>
                            https://your.cad.url/
                        </Link>
                    </p>
                </div>
            </div>
        </Aside>
    );
}
