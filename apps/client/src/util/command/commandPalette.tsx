import type { SpotlightAction as PaletteProps } from '@mantine/spotlight';
import { PlayOne as PlayIcon } from '@icon-park/react';
import startCad from '../control/startCad';

const commandPalette: PaletteProps[] = [
    {
        title: 'Start SnailyCAD',
        description: 'Send a message to the server to start SnailyCAD',
        icon: <PlayIcon />,
        onTrigger: () => {
            startCad();
        },
    },
];

export default commandPalette;
