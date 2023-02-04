'use client';
import './globals.css';
import { MantineProvider } from '@mantine/core';
import AppCore from '@/components/core/app-core';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body className="text-gray-100">
                <MantineProvider
                    theme={{
                        colorScheme: 'dark',
                    }}
                >
                    <AppCore>{children}</AppCore>
                </MantineProvider>
            </body>
        </html>
    );
}
