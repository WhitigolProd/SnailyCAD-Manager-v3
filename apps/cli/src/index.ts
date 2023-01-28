#!/usr/bin/env node

import chalk from 'chalk';
import mainMenu from './menus/mainMenu.js';
import checkConfig from './util/checkConfig.js';
import info from './util/info.js';
import rootPath from './util/rootPath.js';
import userStorage from './util/storage/userStorage.js';

console.log(chalk.greenBright('Welcome to SnailyCAD Manager!'));
info();
console.log(userStorage.find('test'));
