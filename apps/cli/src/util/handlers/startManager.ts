import { spawn } from 'child_process';
import rootPath from '../rootPath.js';
import path from 'path';
import styledLog from '../logs/styledLogs.js';
import appStorage from '../storage/appStorage.js';
import mainMenu from '../../menus/mainMenu.js';

export default async function startManager() {
    const userPort = appStorage.get('port');

    if (!userPort || userPort === '') {
        styledLog.error('No port was provided!');
        styledLog.warn('Please update your config and try again');
        styledLog.info('Returning to main menu...');
        return await mainMenu();
    }

    const managerProcess = spawn(
        `yarn workspace @sc-manager/client next start -p ${userPort}`,
        {
            cwd: rootPath,
            shell: true,
            detached: true,
        }
    );
    managerProcess.stdout.on('data', (data) => {
        styledLog.info(data.toString());
        if (data.toString().includes('Server started')) {
            handleOnReady();
        }
    });
    managerProcess.stderr.on('data', (data) => {
        styledLog.error(data.toString());
    });
    managerProcess.on('close', (code) => {
        styledLog.warn(`Manager process exited with code ${code}`);
    });

    function handleOnReady() {
        styledLog.success('Manager is ready!');
        spawn('start http://localhost:3000', {
            shell: true,
            detached: true,
        });
    }
}
