'use client';
import { signIn } from 'next-auth/react';
import React, { useRef } from 'react';
import Article from '../Article/Article';
import ArticleFooter from '../Article/ArticleFooter';
import Button from '../Buttons/Button';
import Icon from '../Buttons/Icon';
import { toast } from 'react-toastify';

export default function Auth() {
    const username = useRef('');
    const password = useRef('');

    const handleSubmit = async () => {
        const result = await signIn('credentials', {
            username: username.current,
            password: password.current,
            redirect: false,
        });
        if (!result?.ok) {
            return toast.error('Invalid Credentials');
        }
        toast.success('Logged In');
    };

    return (
        <Article title="Log in">
            <form onSubmit={handleSubmit} id="login_form">
                <label htmlFor="username">
                    <span>Username</span>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={(e) => (username.current = e.target.value)}
                    />
                </label>

                <label htmlFor="password">
                    <span>Password</span>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) => (password.current = e.target.value)}
                    />
                </label>

                <ArticleFooter>
                    <Button type="submit" style="primary" size="md">
                        <Icon IconName="login" />
                        <span>Log in</span>
                    </Button>
                </ArticleFooter>
            </form>
        </Article>
    );
}
