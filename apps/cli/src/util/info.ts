import chalk from 'chalk';
import blankLine from './blankLine.js';

export default function info() {
    blankLine();
    console.log(chalk.dim('Utility Info:'));
    console.log(chalk.cyanBright('SnailyCAD Manager v3'));
    console.log(chalk.cyanBright('by Whitigol Web Design'));
}
