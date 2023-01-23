import React from 'react';
import Button from './Buttons/Button';
import Icon from './Buttons/Icon';
import { useToast } from '@/lib/useToast';

export default function Main() {
    return (
        <article>
            <header>
                <div className="flex flex-row gap-1">
                    <span>SnailyCAD</span>
                    <span>v1.44.5</span>
                </div>
            </header>
            <div
                className="flex flex-row justify-center items-center gap-2
            "
            >
                <Button
                    size="md"
                    style="success"
                    onClick={() => {
                        useToast.info('Starting CAD...');
                    }}
                >
                    <Icon IconName="play_arrow" />
                    <span>Start CAD</span>
                </Button>
            </div>
        </article>
    );
}
