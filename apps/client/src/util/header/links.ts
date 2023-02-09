type HeaderLinks = {
    link: string;
    label: string;
    links?: HeaderLinks[];
};

export const links: HeaderLinks[] = [
    {
        link: '/',
        label: 'Home',
    },
    {
        link: '/setup',
        label: 'About',
    },
];
