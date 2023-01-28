import { buttons } from '@/styles/styles';
import React from 'react';

export default function Button({
    children,
    style,
    size,
    type,
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
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: () => void;
}) {
    return (
        // Button with the selected style & size with a default fallback
        <button
            className={`${buttons.base} ${buttons.sizes[size || 'sm']} ${
                buttons.colors[style || 'dark']
            } ${className}`}
            onClick={onClick}
            type={type || 'button'}
        >
            {children}
        </button>
    );
}
