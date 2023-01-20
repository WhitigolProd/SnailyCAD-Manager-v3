#!/usr/bin/env node
import chalk from 'chalk';
import load from './steps/load.js';
import blankLine from './util/blankLine.js';
console.log(chalk.green('Welcome to SnailyCAD Manager v3!'));
blankLine();
console.log(chalk.blueBright('Please select an option below:'));
blankLine();
load();
