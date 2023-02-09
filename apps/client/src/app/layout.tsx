'use client';
import './globals.css';
import { MantineProvider } from '@mantine/core';
import RouterTransition from '@/components/core/router/router-transition';
import { NotificationsProvider } from '@mantine/notifications';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <title>SnailyCAD Manager</title>
                <meta
                    content="width=device-width, initial-scale=1"
                    name="viewport"
                />
                <meta
                    name="description"
                    content="SnailyCAD Manager v3 — SnailyCAD Management Solution with advanced features, improved speed & user-friendliness — Accessible from anywhere!"
                />
                <link rel="icon" href="/icon.png" />
            </head>
            <body className="text-gray-100">
                <MantineProvider
                    theme={{
                        colorScheme: 'dark',
                    }}
                >
                    <NotificationsProvider>
                        <RouterTransition />
                        {children}
                    </NotificationsProvider>
                </MantineProvider>
            </body>
        </html>
    );
}
