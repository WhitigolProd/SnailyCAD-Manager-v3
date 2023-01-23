import React from 'react';
import Article from '../Article/Article';
import ArticleFooter from '../Article/ArticleFooter';
import Button from '../Buttons/Button';
import Icon from '../Buttons/Icon';

export default function Auth() {
    return (
        <Article title="Log in">
            <label htmlFor="username">
                <span>Username</span>
                <input type="text" name="username" id="username" />
            </label>

            <label htmlFor="password">
                <span>Password</span>
                <input type="password" name="password" id="password" />
            </label>

            <ArticleFooter>
                <Button style="primary" size="md">
                    <Icon IconName="login" />
                    <span>Log in</span>
                </Button>
            </ArticleFooter>
        </Article>
    );
}
