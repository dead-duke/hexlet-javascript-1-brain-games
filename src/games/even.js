#!/usr/bin/env node
import readlineSync from 'readline-sync';
import random from '../random.js';

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export const even = () => {
  const numb = random(1, 100);
  console.log(`Question: ${numb}`);
  const answer = numb % 2 === 0 ? 'yes' : 'no';
  const userAnswer = readlineSync.question('Your answer: ');
  return [answer, userAnswer];
};
