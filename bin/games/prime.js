#!/usr/bin/env node
import readlineSync from 'readline-sync';
import random from '../src/random.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const prime = () => {
  const currentNumber = random(1, 100);
  let answer = 'yes';

  for (let i = 2; i <= Math.ceil(currentNumber / 2); i += 1) {
    if (currentNumber % i === 0) {
      answer = 'no';
      break;
    }
  }

  console.log(`Question: ${currentNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return [answer, userAnswer];
};

export default prime;
