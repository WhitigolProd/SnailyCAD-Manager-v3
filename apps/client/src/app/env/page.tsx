import Button from '@/components/Buttons/Button';
import Icon from '@/components/Buttons/Icon';
import { containers } from '@/styles/styles';
import React from 'react';

export default function EnvHome() {
    return (
        <div className={containers.base}>
            <article>
                <header>Environment Variables</header>
                <div className="flex flex-col justify-center items-center text-center gap-3">
                    <p>Choose an action</p>
                    <div className="flex flex-row justify-center items-center text-center gap-2 flex-wrap">
                        <Button style="primary">
                            <Icon IconName="edit" />
                            <span>Edit</span>
                        </Button>
                        <Button style="secondary">
                            <Icon IconName="visibility" />
                            <span>View</span>
                        </Button>
                    </div>
                </div>
            </article>
        </div>
    );
}
