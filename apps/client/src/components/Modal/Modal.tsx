import React from 'react';

export default function Modal({
    children,
    ...props
}: {
    children: React.ReactNode;
    props: {
        title: string;
        subtitle: string;
    };
}) {
    return (
        <dialog>
            <header>
                <div>
                    <span></span>
                </div>
            </header>
        </dialog>
    );
}
