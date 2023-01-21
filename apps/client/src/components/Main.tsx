import React from 'react';
import Button from './Buttons/Button';

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
                <Button>
                    <span>Start CAD</span>
                </Button>
            </div>
        </article>
    );
}
