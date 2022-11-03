#!/usr/bin/env node
import answerUserName from './cli.js';

console.log('Welcome to the Brain Games');
const userName = answerUserName();

export default userName;
