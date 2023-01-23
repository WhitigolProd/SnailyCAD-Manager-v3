import React from 'react';

export default function ArticleFooter({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <footer>
            <div
                className={`${className} flex flex-row justify-end items-center w-full`}
            >
                {children}
            </div>
        </footer>
    );
}
