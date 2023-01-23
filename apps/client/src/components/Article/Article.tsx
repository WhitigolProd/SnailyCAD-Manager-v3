import React from 'react';

export default function Article({
    children,
    title,
    subtitle,
    className,
}: {
    children: React.ReactNode;
    title: string;
    subtitle?: string;
    className?: string;
}) {
    return (
        <article className={className}>
            <header>
                <div className="flex flex-row gap-2 justify-center items-center">
                    <span>{title}</span>
                    <span className="text-xs text-slate-500">{subtitle}</span>
                </div>
            </header>
            {children}
        </article>
    );
}
