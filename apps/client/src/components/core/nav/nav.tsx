import { useState } from 'react';
import { Navbar, SegmentedControl, Text, createStyles } from '@mantine/core';

import {
    AllApplication as DashboardIcon,
    TopicDiscussion as DiscordIcon,
    Logout as LogoutIcon,
} from '@icon-park/react';

const useStyles = createStyles((theme, _params, getRef) => {
    const icon = getRef('icon');

    return {
        navbar: {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[7]
                    : theme.white,
        },

        title: {
            textTransform: 'uppercase',
            letterSpacing: -0.25,
        },

        link: {
            ...theme.fn.focusStyles(),
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            fontSize: theme.fontSizes.sm,
            color:
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[1]
                    : theme.colors.gray[7],
            padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
            borderRadius: theme.radius.sm,
            fontWeight: 500,

            '&:hover': {
                backgroundColor:
                    theme.colorScheme === 'dark'
                        ? theme.colors.dark[6]
                        : theme.colors.gray[0],
                color: theme.colorScheme === 'dark' ? theme.white : theme.black,

                [`& .${icon}`]: {
                    color:
                        theme.colorScheme === 'dark'
                            ? theme.white
                            : theme.black,
                },
            },
        },

        linkIcon: {
            ref: icon,
            color:
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[2]
                    : theme.colors.gray[6],
            marginRight: theme.spacing.sm,
        },

        linkActive: {
            '&, &:hover': {
                backgroundColor: theme.fn.variant({
                    variant: 'light',
                    color: theme.primaryColor,
                }).background,
                color: theme.fn.variant({
                    variant: 'light',
                    color: theme.primaryColor,
                }).color,
                [`& .${icon}`]: {
                    color: theme.fn.variant({
                        variant: 'light',
                        color: theme.primaryColor,
                    }).color,
                },
            },
        },

        footer: {
            borderTop: `1px solid ${
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[4]
                    : theme.colors.gray[3]
            }`,
            paddingTop: theme.spacing.md,
        },
    };
});

const tabs = {
    snailycad: [{ link: '', label: 'Dashboard', icon: <DashboardIcon /> }],
    misc: [{ link: '', label: 'Test 2', icon: null }],
};

interface AppNavProps {
    hidden: boolean;
}

export function AppNav(props: AppNavProps) {
    const { classes, cx } = useStyles();
    const [section, setSection] = useState<'snailycad' | 'misc'>('snailycad');
    const [active, setActive] = useState('Dashboard');

    const links = tabs[section].map((item) => (
        <a
            className={cx(classes.link, {
                [classes.linkActive]: item.label === active,
            })}
            href={item.link}
            key={item.label}
            onClick={(event) => {
                event.preventDefault();
                setActive(item.label);
            }}
        >
            <div className="flex items-center justify-center gap-1">
                {item.icon}
                <span>{item.label}</span>
            </div>
        </a>
    ));

    return (
        <Navbar
            width={{ sm: 200, lg: 300 }}
            p="md"
            className={`${classes.navbar} grow overflow-auto`}
            hiddenBreakpoint="sm"
            hidden={props.hidden}
        >
            <Navbar.Section>
                <SegmentedControl
                    value={section}
                    onChange={(value: 'snailycad' | 'misc') =>
                        setSection(value)
                    }
                    transitionTimingFunction="ease"
                    fullWidth
                    data={[
                        { label: 'SnailyCAD', value: 'snailycad' },
                        { label: 'Misc', value: 'misc' },
                    ]}
                />
            </Navbar.Section>

            <Navbar.Section grow mt="xl">
                {links}
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                <a
                    href="#"
                    className={`${classes.link} flex items-center gap-2`}
                    onClick={(event) => event.preventDefault()}
                >
                    <DiscordIcon theme="outline" size={20} />
                    <span>Join the SnailyCAD Discord</span>
                </a>

                <a
                    href="#"
                    className={`${classes.link} flex items-center gap-2`}
                    onClick={(event) => event.preventDefault()}
                >
                    <LogoutIcon theme="outline" size={20} />
                    <span>Logout</span>
                </a>
            </Navbar.Section>
        </Navbar>
    );
}
