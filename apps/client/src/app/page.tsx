'use client';
import Main from '@/components/Main';
import Tools from '@/components/Tools';
import React from 'react';
import BottomInfo from '@/components/Info/BottomInfo';

export default function Home() {
    return (
        <div className="h-[100%] flex flex-col justify-center items-center">
            <Main />
            <Tools />
            <BottomInfo />
        </div>
    );
}
