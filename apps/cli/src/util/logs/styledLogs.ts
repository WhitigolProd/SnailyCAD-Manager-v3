import chalk from 'chalk';

const styledLog = {
    info: (message: string) => {
        console.log(`${chalk.bgBlueBright(' INFO ')} ${message}`);
    },
    error: (message: string) => {
        console.log(`${chalk.bgRed(' ERROR ')} ${message}`);
    },
    success: (message: string) => {
        console.log(`${chalk.bgGreen(' SUCCESS ')} ${message}`);
    },
    warn: (message: string) => {
        console.log(`${chalk.bgYellow(' WARN ')} ${message}`);
    },
};

export default styledLog;
