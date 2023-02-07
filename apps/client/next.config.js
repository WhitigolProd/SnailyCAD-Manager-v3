// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;

module.exports = withSentryConfig(
    module.exports,
    {
        silent: true,
        authToken:
            '57084cbd5ef94da79bba6b244f3e940ef286f7de75644ce0b746091648ba1331',
    },
    { hideSourceMaps: true }
);
