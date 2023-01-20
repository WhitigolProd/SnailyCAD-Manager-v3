import { existsSync, writeFileSync } from 'fs';
import nanospinner from 'nanospinner';
import { configPath } from '../util/storage.js';
import setup from './setup.js';
export default async function load() {
    const spinner = nanospinner.createSpinner('Checking Config...').start();
    const configExists = existsSync(configPath);
    if (configExists) {
        spinner.success({
            text: 'Config Check Complete',
        });
    } else {
        spinner.warn({
            text: 'Config does not exist, running setup...',
        });
        console.log('Creating Config File...');
        writeFileSync(configPath, JSON.stringify({}), 'utf8');
        await setup();
    }
}
