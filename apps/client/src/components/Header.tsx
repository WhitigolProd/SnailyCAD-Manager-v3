'use client';
import Link from 'next/link';
import React from 'react';
import logo from '../../public/icon-white.png';
import Button from './Buttons/Button';
import Icon from './Buttons/Icon';

export default function Header() {
    return (
        <header className="fixed top-0 w-screen flex flex-row gap-2 justify-center items-center py-3 bg-sky-800 text-white">
            <Link href="/">
                <div className="flex flex-row gap-1 justify-center items-center cursor-pointer">
                    <img
                        src={logo.src}
                        alt="SnailyCAD Manager Logo"
                        className="w-5 h-5"
                    />
                    <p className="text-white">SnailyCAD Manager</p>
                </div>
            </Link>
            <Link href="/btns">
                <Button style="dark" size="sm">
                    <Icon IconName="dashboard" />
                    <span>View Button Examples</span>
                </Button>
            </Link>
        </header>
    );
}
