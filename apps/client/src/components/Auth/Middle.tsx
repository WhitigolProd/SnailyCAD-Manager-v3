'use client';
import { useSession } from 'next-auth/react';
import Main from '@/components/Main';
import React from 'react';
import Auth from './Auth';
import Tools from '../Tools';
import { containers } from '@/styles/styles';

export default function Middle({
    children,
    session,
}: {
    children: React.ReactNode;
    session: any;
}) {
    const { data } = useSession();
    return (
        <div className="h-full flex flex-col flex-grow">
            {data?.user ? (
                <div className="h-full flex flex-col justify-center items-center">
                    {children}
                </div>
            ) : (
                <div className={containers.base}>
                    <Auth />
                </div>
            )}
        </div>
    );
}
