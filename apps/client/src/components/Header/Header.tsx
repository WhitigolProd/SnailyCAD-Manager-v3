'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../../public/icon-white.png';
import Article from '../Article/Article';
import ArticleFooter from '../Article/ArticleFooter';
import Button from '../Buttons/Button';
import Icon from '../Buttons/Icon';
import MenuOptions from './MenuOptions';
import { ToastContainer } from 'react-toastify';

// Handle open/close of dialog using state

export default function Header() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
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

            <dialog open={open}>
                <Article
                    title="Menu"
                    subtitle="Select an option from the menu!"
                >
                    <MenuOptions handleOpen={handleOpen} />

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
