import * as Sentry from '@sentry/nextjs';

Sentry.init({
    dsn: 'https://eaeafc4b964d486997eb59f88f2f2292@o4504589019381760.ingest.sentry.io/4504623521464320',
    tracesSampleRate: 1.0,
});
