import React from 'react';

export default function Button({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-row gap-1 p-2 cursor-pointer bg-sky-500 bg-opacity-5 hover:bg-opacity-50 border border-sky-500 border-opacity-50 hover:border-opacity-100 w-fit rounded-lg transition-colors">
            {children}
        </div>
    );
}
