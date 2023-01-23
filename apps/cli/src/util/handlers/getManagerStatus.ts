import chalk from 'chalk';
import pm2 from 'pm2';
import rootPath from '../rootPath.js';

export function getManagerStatus() {}

export function startPm2Process() {
    pm2.start(
        {
            name: 'SnailyCAD-Manager',
            cwd: rootPath,
            interpreter: 'node',
            script: 'yarn',
            args: 'run dev',
            max_restarts: 1,
        },
        (err, proc) => {
            if (err) {
                console.log(chalk.redBright(err));
            }
            console.log(proc);
        }
    );
}

export async function processInPm2() {
    pm2.list((err, list) => {
        if (err) {
            console.log(chalk.redBright(err));
        }
        console.log(list);
    });
}
