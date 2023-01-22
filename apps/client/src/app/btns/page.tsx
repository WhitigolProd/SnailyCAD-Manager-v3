import Button from '@/components/Buttons/Button';
import React from 'react';

export default function BtnsExample() {
    return (
        <div className="container">
            <article>
                <header>Buttons Examples</header>
                <div className="flex flex-col gap-2">
                    <Button size="sm" style="primary">
                        <span>Primary</span>
                    </Button>
                    <Button size="sm" style="secondary">
                        <span>Secondary</span>
                    </Button>
                    <Button size="sm" style="success">
                        <span>Success</span>
                    </Button>
                    <Button size="sm" style="danger">
                        <span>Danger</span>
                    </Button>
                    <Button size="sm" style="warning">
                        <span>Warning</span>
                    </Button>
                    <Button size="sm" style="info">
                        <span>Info</span>
                    </Button>
                    <Button size="sm" style="light">
                        <span>Light</span>
                    </Button>
                    <Button size="sm" style="dark">
                        <span>Dark</span>
                    </Button>
                    <Button size="sm" style="link">
                        <span>Link</span>
                    </Button>
                    <Button size="sm" style="primary">
                        <span>Small</span>
                    </Button>
                    <Button size="md" style="secondary">
                        <span>Medium</span>
                    </Button>
                    <Button size="lg" style="info">
                        <span>Large</span>
                    </Button>
                </div>
            </article>
        </div>
    );
}
