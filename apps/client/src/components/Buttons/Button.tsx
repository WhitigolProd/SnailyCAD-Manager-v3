'use client';
import { buttons } from './styles';
import React from 'react';

export default function Button({
    children,
    style,
    size,
    type,
    disabled,
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
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
}) {
    return (
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
