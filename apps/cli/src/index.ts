#!/usr/bin/env node

import chalk from 'chalk';
import checkConfig from './util/checkConfig.js';
import {
    processInPm2,
    startPm2Process,
} from './util/handlers/getManagerStatus.js';
import info from './util/info.js';
import rootPath from './util/rootPath.js';

console.log(chalk.greenBright('Welcome to SnailyCAD Manager!'));
info();
await checkConfig();
await startPm2Process();
