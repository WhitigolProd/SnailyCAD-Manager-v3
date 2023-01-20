import { spawn } from 'child_process';
import inquirer from 'inquirer';

export default function mainMenu() {
    inquirer
        .prompt({
            name: 'mainMenu',
            type: 'list',
            message: 'What would you like to do?',
            choices: ['Test'],
        })
        .then((answers) => {
            switch (answers.mainMenu) {
                case 'Test':
                    const process = spawn('explorer /', { shell: true });
                    process.stdout.on('data', (chunk) => {
                        console.log(chunk.toString());
                    });
            }
        });
}
