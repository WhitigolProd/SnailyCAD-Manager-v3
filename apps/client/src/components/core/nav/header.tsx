'use client';
import {
    createStyles,
    Header,
    Menu,
    Group,
    Center,
    Burger,
    Container,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Down as DownIcon } from '@icon-park/react';
import Image from 'next/image';
import logo from 'public/icon.png';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
    inner: {
        height: 56,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[0]
                : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
        },
    },

    linkLabel: {
        marginRight: 5,
    },
}));

export interface HeaderSearchProps {
    links: {
        link: string;
        label: string;
        target?: '_blank' | '_self' | '_parent' | '_top';
        links: { link: string; label: string }[];
    }[];
}

export default function AppHeader({ links }: HeaderSearchProps) {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes } = useStyles();

    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Link href={link.link} key={link.label} target={link.target}>
                <Menu.Item key={item.link}>{item.label}</Menu.Item>
            </Link>
        ));

        if (menuItems) {
            return (
                <Menu
                    key={link.label}
                    trigger="hover"
                    exitTransitionDuration={0}
                >
                    <Menu.Target>
                        <Center>
                            <Link
                                href={link.link}
                                key={link.label}
                                className={classes.link}
                            >
                                <span className={classes.linkLabel}>
                                    {link.label}
                                </span>
                                <DownIcon size={12} />
                            </Link>
                        </Center>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <Link key={link.label} href={link.link} className={classes.link}>
                {link.label}
            </Link>
        );
    });

    return (
        <Header height={56} mb={120}>
            <Container>
                <div className={classes.inner}>
                    <Link href="/" className="flex gap-2">
                        <Image
                            src={logo}
                            alt="SnailyCAD Manager Logo"
                            width={30}
                        />
                        <h1 className="text-lg font-semibold">
                            SnailyCAD Manager
                        </h1>
                    </Link>
                    <Group spacing={5} className={classes.links}>
                        {items}
                    </Group>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        className={classes.burger}
                        size="sm"
                    />
                </div>
            </Container>
        </Header>
    );
}
