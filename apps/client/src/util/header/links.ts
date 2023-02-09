type HeaderLinks = {
    link: string;
    label: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
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
