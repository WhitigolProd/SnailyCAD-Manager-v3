import Link from 'next/link';
import React from 'react';
import Button from '../Buttons/Button';
import Icon from '../Buttons/Icon';
import BottomInfo from '../Info/BottomInfo';

export default function MenuOptions({
    handleOpen,
}: {
    handleOpen: () => void;
}) {
    return (
        <div className="flex flex-col justify-center items-center gap-3">
            {/* When clicked, call handleOpen from the parent component */}
            <Link href="/">
                <Button style="success" size="sm" onClick={handleOpen}>
                    <Icon IconName="home" />
                    <span>Home</span>
                </Button>
            </Link>
            <Link href="/btns">
                <Button style="info" size="sm" onClick={handleOpen}>
                    <Icon IconName="dashboard" />
                    <span>Button Examples</span>
                </Button>
            </Link>
            <Button style="danger" size="sm">
                <Icon IconName="logout" />
                <span>Logout</span>
            </Button>

            <BottomInfo />
        </div>
    );
}
