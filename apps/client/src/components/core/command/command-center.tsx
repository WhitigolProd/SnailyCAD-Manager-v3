import React from 'react';
import { SpotlightProvider } from '@mantine/spotlight';
import commandPalette from '@/util/command/commandPalette';
import { Search as SearchIcon } from '@icon-park/react';

export default function AppCommandCenter() {
    return (
        <SpotlightProvider
            actions={commandPalette}
            searchIcon={<SearchIcon />}
            searchPlaceholder="Search for a command..."
            nothingFoundMessage="No commands found"
            shortcut={['mod + k', 'ctrl + k', '/', 'mod + /', 'ctrl + /']}
        ></SpotlightProvider>
    );
}
