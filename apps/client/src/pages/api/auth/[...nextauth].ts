import NextAuth, { NextAuthOptions } from 'next-auth';
import CridentalsProvider from 'next-auth/providers/credentials';
// @ts-expect-error - This is a workaround for no module resolution
import userStorage from '@sc-manager/cli/dist/util/storage/userStorage';

// function to generate a random key
function keygen(length: number) {
    const charset =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let retVal = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        CridentalsProvider({
            name: 'Cridentals',
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'Username',
                },
                password: { label: 'Password', type: 'password' },
            },

            async authorize(credentials) {
                const user = userStorage.find(
                    credentials!.username.toLowerCase()
                );
                if (user && user.password === credentials!.password) {
                    return user;
                }

                return null;
            },
        }),
    ],

    session: {
        strategy: 'jwt',
    },

    pages: {
        signIn: '/',
    },

    jwt: {
        secret: 'super-secret-key',
    },
};

export default NextAuth(authOptions);
