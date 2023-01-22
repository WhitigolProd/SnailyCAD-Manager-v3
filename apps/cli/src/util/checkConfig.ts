import rootPath from './rootPath.js';
import path from 'path';
import fs from 'fs';
import nanospinner from 'nanospinner';
import runSetup from './setup/runSetup.js';

export default async function checkConfig(): Promise<void> {
    const configPath = path.join(rootPath, '/storage/config.json');
    const spinner = nanospinner.createSpinner('Checking Configuration').start();
    if (!fs.existsSync(configPath)) {
        spinner.warn({
            text: 'Configuration not found, creating one...',
        });
    } else {
        const config = JSON.parse(
            fs.readFileSync(configPath, { encoding: 'utf-8' })
        );
        spinner.success({
            text: `Configuration found at ${configPath}`,
        });
        if (!config.setup) {
            spinner.update({
                text: 'Setup has not been completed, running setup...',
            });
            return await runSetup();
        }
    }
    setTimeout(() => {}, 3000);
}
