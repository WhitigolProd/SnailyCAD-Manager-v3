'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../../public/icon-white.png';
import Article from '../Article/Article';
import ArticleFooter from '../Article/ArticleFooter';
import Button from '../Buttons/Button';
import Icon from '../Buttons/Icon';
import BottomInfo from '../Info/BottomInfo';

// Handle open/close of dialog using state

export default function Header() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <>
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
                <Button style="dark" size="sm" onClick={handleOpen}>
                    <Icon IconName="menu" />
                </Button>
            </header>

            <dialog open={open}>
                <Article
                    title="Menu"
                    subtitle="Select an option from the menu!"
                >
                    <div className="flex flex-col justify-center items-center gap-3">
                        <Button style="danger" size="sm">
                            <Icon IconName="logout" />
                            <span>Logout</span>
                        </Button>

                        <BottomInfo />
                    </div>

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
