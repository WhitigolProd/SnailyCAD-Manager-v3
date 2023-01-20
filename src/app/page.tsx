import Button from '@/components/Button';
import Header from '@/components/Header';
import Main from '@/components/Home/Main';
import React from 'react';
import '../styles/tw.css';

export default function Home() {
    return (
        <div className="flex flex-col gap-2 justify-center items-center h-screen">
            <Header />
            <Main />
        </div>
    );
}
