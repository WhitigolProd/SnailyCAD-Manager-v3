import React from 'react';
import Button from './Buttons/Button';
import Icon from './Buttons/Icon';
import { toast } from 'react-toastify';
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
                        toast.info('Starting CAD...');
                    }}
                >
                    <Icon IconName="play_arrow" />
                    <span>Start</span>
                </Button>
                <Button size="md" style="info">
                    <Icon IconName="download" />
                    <span>Update</span>
                </Button>
            </div>
        </Article>
    );
}
