import React from 'react';
import Button from '../Buttons/Button';
import Icon from '../Buttons/Icon';
import BottomInfo from '../Info/BottomInfo';

export default function MenuOptions() {
    return (
        <div className="flex flex-col justify-center items-center gap-3">
            <Button style="danger" size="sm">
                <Icon IconName="logout" />
                <span>Logout</span>
            </Button>

            <BottomInfo />
        </div>
    );
}
