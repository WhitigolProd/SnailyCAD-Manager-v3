import chalk from 'chalk';
import pm2 from 'pm2';
import rootPath from '../rootPath.js';

export function getManagerStatus() {}

export async function processInPm2() {
    pm2.list((err, list) => {
        if (err) {
            console.log(chalk.redBright(err));
        }
        console.log(list);
    });
}
