import React from 'react';
import Button from './Buttons/Button';
import Icon from './Buttons/Icon';
import { useToast } from '@/lib/useToast';
import Article from './Article/Article';
import CadVersion from './CAD/CadVersion';

export default function Main() {
    return (
        <Article title="SnailyCAD" subtitle={<CadVersion />}>
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
        </Article>
    );
}
