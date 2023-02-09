'use client';
import React, { useEffect } from 'react';
import { Input } from '@mantine/core';
import { Send as SendIcon } from '@icon-park/react';
import axios from 'axios';
import io, { Socket } from 'socket.io-client';

export let clientSocket: Socket;

export default function AppTerminal() {
    // async function socketInit() {
    //     await axios.get('/api/socket');
    //     clientSocket = io();
    //     clientSocket.on('connect', () => {
    //         console.log('Server Socket Connected');
    //     });
    // }

    // useEffect(() => {
    //     socketInit();
    // }, []);

    return (
        <>
            <div className="relative flex flex-col grow bg-black/50 rounded-lg w-full">
                <pre className="text-xs font-mono p-4">
                    <code className="flex flex-col whitespace-normal">
                        yarn install
                        <span className="text-green-400">
                            [1/4] Resolving packages...
                        </span>
                        <span className="text-yellow-400">
                            [2/4] Fetching packages...
                        </span>
                        <span className="text-pink-400">
                            [3/4] Linking dependencies...
                        </span>
                        <span className="text-green-400">
                            [4/4] Building fresh packages...
                        </span>
                        success Saved lockfile. Done in 4.54s.
                    </code>
                </pre>
                <Input
                    placeholder="Execute terminal command..."
                    className="absolute bottom-0 w-full !bg-transparent"
                    rightSection={<SendIcon />}
                />
            </div>
        </>
    );
}
