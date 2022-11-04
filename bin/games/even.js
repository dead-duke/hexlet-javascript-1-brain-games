#!/usr/bin/env node
import readlineSync from 'readline-sync';
import random from '../src/random.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const even = () => {
  const numb = random(1, 100);
  console.log(`Question: ${numb}`);
  const answer = numb % 2 === 0 ? 'yes' : 'no';
  const userAnswer = readlineSync.question('Your answer: ');
  return [answer, userAnswer];
};

export default even;
