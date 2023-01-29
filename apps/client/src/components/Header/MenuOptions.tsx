import Button from '@/components/Buttons/Button';
import Icon from '@/components/Buttons/Icon';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-toastify';
import BottomInfo from '../Info/BottomInfo';

export default function MenuOptions({
    handleOpen,
}: {
    handleOpen: () => void;
}) {
    const handleSignOut = () => {
        handleOpen();
        signOut({
            callbackUrl: '/',
            redirect: false,
        });
        toast.info('Logged Out');
    };

    const { data: session } = useSession();
    return (
        <div className="flex flex-col justify-center items-center gap-3">
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
            {session?.user && (
                <Button style="danger" size="sm" onClick={handleSignOut}>
                    <Icon IconName="logout" />
                    <span>Logout</span>
                </Button>
            )}

            <BottomInfo />
        </div>
    );
}
