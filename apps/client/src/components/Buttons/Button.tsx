import { buttons } from '@/styles/styles';
import React from 'react';

export default function Button({
    children,
    style,
    size,
    className,
    onClick,
}: {
    children: React.ReactNode;
    style?:
        | 'primary'
        | 'secondary'
        | 'success'
        | 'danger'
        | 'warning'
        | 'info'
        | 'light'
        | 'dark'
        | 'link';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
}) {
    return (
        // Button with the selected style & size with a default fallback
        <div
            className={`${buttons.base} ${buttons.sizes[size || 'md']} ${
                buttons.colors[style || 'dark']
            } ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
