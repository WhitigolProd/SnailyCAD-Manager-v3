#!/usr/bin/env node

import chalk from 'chalk';
import checkConfig from './util/checkConfig.js';
import startManager from './util/handlers/startManager.js';
import info from './util/info.js';
import rootPath from './util/rootPath.js';

console.log(chalk.greenBright('Welcome to SnailyCAD Manager!'));
info();
await startManager();
