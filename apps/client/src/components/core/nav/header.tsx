import Image from 'next/image';
import React from 'react';
import logo from 'public/icon.png';
import Link from 'next/link';

export default function AppHeader() {
    return (
        <Link href="/">
            <div className="flex justify-center items-center gap-2 text-lg font-bold">
                <Image src={logo} alt="Logo" width={32} height={32} />
                <span>SnailyCAD Manager</span>
            </div>
        </Link>
    );
}
