import { spawn as spawnProcess } from 'child_process';
import styledLogs from '../logs/styledLogs.js';

export default async function runSetup() {
    const proccess = spawnProcess('echo Running Setup', {
        shell: true,
    });

    proccess.stdout.on('data', (data) => {
        console.log(data.toString());
    });

    proccess.stderr.on('data', (data) => {
        console.error(data.toString());
    });

    process.on('exit', (code) => {
        styledLogs.warn(`Process exited with code ${code}`);
    });
}
