'use client';
import '../styles/tailwind.css';
import Header from '@/components/Header/Header';
import 'react-toastify/dist/ReactToastify.css';
import Middle from '@/components/Auth/Middle';
import { SessionProvider } from 'next-auth/react';
let user = true; //! Testing purposes only - remove in production

// Get the window.location.hostname from the browser

export default function RootLayout({
    children,
    session,
}: {
    children: React.ReactNode;
    session: any;
}) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body className="h-screen">
                <SessionProvider session={session}>
                    <div className="h-full flex flex-col flex-grow">
                        <Header />
                        <Middle session={session}>
                            <>{children}</>
                        </Middle>
                    </div>
                </SessionProvider>
            </body>
        </html>
    );
}
