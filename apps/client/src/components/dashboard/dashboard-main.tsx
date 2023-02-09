'use client';
import { Card, Button } from '@mantine/core';
import React from 'react';
import { PlayOne as StartIcon } from '@icon-park/react';
import startCad from '@/util/control/startCad';
import AppTerminal from '../terminal/terminal';
import Link from 'next/link';

export default function DashboardMain() {
    return (
        <div className="w-full h-full flex flex-col gap-4">
            <Card
                shadow="sm"
                radius="md"
                withBorder
                className="flex flex-col justify-center items-center gap-2 text-center p-10"
            >
                <Card.Section>
                    <h1 className="text-2xl font-bold">Manage SnailyCAD</h1>
                </Card.Section>
                <Card.Section>
                    <p className="text-zinc-500">
                        Welcome to the SnailyCAD dashboard. Here you can manage
                        your CAD.
                    </p>
                </Card.Section>
                <Card.Section>
                    <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
                        <Button
                            color="green"
                            variant="outline"
                            leftIcon={<StartIcon />}
                            onClick={startCad}
                        >
                            Start SnailyCAD
                        </Button>
                        <Link href="/setup">
                            <Button>Stop SnailyCAD</Button>
                        </Link>
                    </div>
                </Card.Section>
            </Card>

            <AppTerminal />
        </div>
    );
}
