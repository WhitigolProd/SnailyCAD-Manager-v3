import chalk from 'chalk';
import { default as findProcess } from 'find-process';
import styledLog from '../logs/styledLogs.js';
import appStorage from '../storage/appStorage.js';

export default async function getManagerStatus() {
    let status;
    const userPort = await appStorage.get('port');
    await findProcess('port', userPort).then((list) => {
        if (list.length > 0) {
            status = true;
        } else {
            status = false;
        }
    });
    return status;
}
