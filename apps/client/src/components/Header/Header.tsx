'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../../public/icon-white.png';
import Article from '../Article/Article';
import ArticleFooter from '../Article/ArticleFooter';
import Button from '../Buttons/Button';
import Icon from '../Buttons/Icon';
import BottomInfo from '../Info/BottomInfo';
import MenuOptions from './MenuOptions';

// Handle open/close of dialog using state

export default function Header() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    const [localWarning, setLocalWarning] = useState(false);
    const handleLocalWarning = () => {
        setLocalWarning(!localWarning);
    };

    return (
        <>
            <header className="w-full py-3 bg-sky-800/20 text-white">
                <div className="container flex flex-row justify-between items-center">
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
                    <Button style="secondary" size="sm" onClick={handleOpen}>
                        <Icon IconName="menu" />
                    </Button>
                </div>
            </header>

            {window.location.hostname === 'localhost' && (
                <>
                    <div className="fixed bottom-0 right-0 m-2">
                        <Button
                            style="warning"
                            size="sm"
                            onClick={handleLocalWarning}
                        >
                            <Icon IconName="warning" />
                            <span>View Warning</span>
                        </Button>
                    </div>

                    <dialog open={localWarning}>
                        <Article title="Warning">
                            <p className="text-center">
                                You are currently running SnailyCAD Manager
                                on&nbsp;
                                <code>localhost</code>. To use SnailyCAD Manager
                                on a remote device, you must forward the port of
                                SnailyCAD Manager on the machine you are running
                                it on.
                            </p>

                            <ArticleFooter>
                                <Button
                                    style="dark"
                                    size="sm"
                                    onClick={handleLocalWarning}
                                >
                                    <Icon IconName="close" />
                                    <span>Close</span>
                                </Button>
                            </ArticleFooter>
                        </Article>
                    </dialog>
                </>
            )}

            <dialog open={open}>
                <Article
                    title="Menu"
                    subtitle="Select an option from the menu!"
                >
                    <MenuOptions />

                    <ArticleFooter>
                        <Button style="dark" size="sm" onClick={handleOpen}>
                            <Icon IconName="close" />
                            <span>Close</span>
                        </Button>
                    </ArticleFooter>
                </Article>
            </dialog>
        </>
    );
}
