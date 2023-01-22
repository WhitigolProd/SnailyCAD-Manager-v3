'use client';
import Main from '@/components/Main';
import SystemInfo from '@/components/SystemInfo';
import Tools from '@/components/Tools';
import React from 'react';

export default function Home() {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <Main />
            <Tools />
            <SystemInfo />
        </div>
    );
}
