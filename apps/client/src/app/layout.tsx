import '../styles/tailwind.css';
import Header from '@/components/Header/Header';
import Auth from '@/components/Auth/Auth';
let user = false; //! Testing purposes only - remove in production
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
            <body className="h-screen">
                {user ? (
                    <>
                        <Header />
                        {children}
                    </>
                ) : (
                    <div className="flex flex-col justify-center items-center h-full">
                        <Auth />
                    </div>
                )}
            </body>
        </html>
    );
}
