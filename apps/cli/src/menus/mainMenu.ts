import inquirer from 'inquirer';
export default function mainMenu() {
    inquirer.prompt({
        type: 'list',
        name: 'mainMenu',
        message: 'What would you like to do?',
        choices: [],
    });
}
