import chalk from 'chalk';
import inquirer from 'inquirer';
import blankLine from '../util/blankLine.js';
import { Config } from '../util/storage.js';
export default async function setup() {
    console.log(chalk.greenBright('SnailyCAD Manager | Setup'));
    blankLine();
    const SetPort = inquirer
        .prompt({
        name: 'SetPort',
        type: 'input',
        message: 'What port would you like SnailyCAD Manager to run on? (Default: 3050)',
        default: '3050',
    })
        .then((answers) => {
        const answer = answers.SetPort;
        Config('port').setItem(answer);
    });
}
