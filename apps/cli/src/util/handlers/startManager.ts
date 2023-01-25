import { spawn } from 'child_process';
import rootPath from '../rootPath.js';
import path from 'path';
import styledLog from '../logs/styledLogs.js';
import appStorage from '../storage/appStorage.js';
import mainMenu from '../../menus/mainMenu.js';
import nanospinner from 'nanospinner';

export default async function startManager() {
    const userPort = appStorage.get('port');

    if (!userPort || userPort === '') {
        styledLog.error('No port was provided!');
        styledLog.warn('Please update your config and try again');
        styledLog.info('Returning to main menu...');
        return await mainMenu();
    }

    const spinner = nanospinner.createSpinner('Starting Manager...');

    const managerProcess = spawn(
        `yarn workspace @sc-manager/client next start -p ${userPort || 3000}`,
        {
            cwd: rootPath,
            shell: true,
            detached: true,
        }
    );
    managerProcess.stdout.on('data', (data) => {
        spinner.success({
            text: 'Manager is ready!',
        });
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
