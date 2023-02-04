'use client';
import { useState } from 'react';
import {
    AppShell,
    Navbar,
    Header,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
} from '@mantine/core';
import { AppNav } from './nav/nav';
import AppSidebar from './nav/sidebar';
import AppHeader from './nav/header';

interface AppCoreProps {
    children: React.ReactNode;
}

export default function AppCore(props: AppCoreProps) {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    return (
        <AppShell
            styles={{
                main: {
                    background:
                        theme.colorScheme === 'dark'
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={<AppNav hidden={!opened} />}
            aside={<AppSidebar />}
            footer={
                <Footer
                    height={60}
                    p="md"
                    className="flex justify-center items-center gap-2"
                >
                    Built with
                    <span className="text-lg text-red-500 animate-bounce">
                        &hearts;
                    </span>
                    by Whitigol, with Next.js. &copy; {new Date().getFullYear()}{' '}
                    Whitigol Web Design. All rights reserved.
                </Footer>
            }
            header={
                <Header height={{ base: 50, md: 70 }} p="md">
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        <MediaQuery
                            largerThan="sm"
                            styles={{ display: 'none' }}
                        >
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>

                        <AppHeader />
                    </div>
                </Header>
            }
        >
            {props.children}
        </AppShell>
    );
}
