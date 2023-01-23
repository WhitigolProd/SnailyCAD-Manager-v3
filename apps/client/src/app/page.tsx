'use client';
import Main from '@/components/Main';
import Tools from '@/components/Tools';
import React from 'react';
import BottomInfo from '@/components/Info/BottomInfo';
import { containers } from '@/styles/styles';

export default function Home() {
    return (
        <div className={containers.base}>
            <Main />
            <Tools />
            <BottomInfo />
        </div>
    );
}
