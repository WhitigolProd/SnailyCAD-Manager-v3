'use client';
import React from 'react';
import logo from '../../public/icon-white.png';
import Button from './Buttons/Button';
import Icon from './Buttons/Icon';
// Function to redirect to /
function redirectToHome() {
    window.location.href = '/';
}
function redirectToButtonExamples() {
    window.location.pathname = '/btns';
}

export default function Header() {
    return (
        <header className="fixed top-0 w-screen mb-[100%] flex flex-row gap-2 justify-center items-center py-3 bg-sky-800 text-white">
            <div
                className="flex flex-row gap-1 justify-center items-center cursor-pointer"
                onClick={redirectToHome}
            >
                <img
                    src={logo.src}
                    alt="SnailyCAD Manager Logo"
                    className="w-5 h-5"
                />
                <p className="text-white">SnailyCAD Manager</p>
            </div>
            <Button style="dark" size="sm" onClick={redirectToButtonExamples}>
                <Icon IconName="dashboard" />
                <span>View Button Examples</span>
            </Button>
        </header>
    );
}
