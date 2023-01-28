import React from 'react';
import Article from './Article/Article';
import Button from './Buttons/Button';
import Icon from './Buttons/Icon';

export default function Tools() {
    return (
        <Article title="Additional Tools">
            <div className="flex flex-row justify-center items-center gap-2">
                <Button style="info" size="sm">
                    <Icon IconName="construction" />
                    <span>CAD Toolbox</span>
                </Button>
                <Button style="info" size="sm">
                    <Icon IconName="settings" />
                    <span>Settings</span>
                </Button>
                <Button style="info" size="sm">
                    <Icon IconName="info" />
                    <span>Information</span>
                </Button>
            </div>
        </Article>
    );
}
