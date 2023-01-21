import { buttons } from '@/styles/styles';
import React from 'react';

export default function Button({ children, ...props }: any) {
    return (
        <div
            className={`${
                props.style === 'success'
                    ? buttons.success
                    : props.style === 'danger'
                    ? buttons.danger
                    : props.style === 'warning'
                    ? buttons.warning
                    : props.style === 'info'
                    ? buttons.info
                    : props.style === 'primary'
                    ? buttons.primary
                    : props.style === 'secondary'
                    ? buttons.secondary
                    : props.style === 'light'
                    ? buttons.light
                    : props.style === 'dark'
                    ? buttons.dark
                    : props.style === 'link'
                    ? buttons.link
                    : props.style === 'outline'
                    ? buttons.outline
                    : props.style === 'text'
                    ? buttons.text
                    : props.style === 'disabled'
                    ? buttons.disabled
                    : buttons.primary
            }`}
            onClick={props.onClick}
        >
            {children}
        </div>
    );
}
