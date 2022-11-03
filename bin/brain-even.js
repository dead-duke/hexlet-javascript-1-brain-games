#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from './brain-games.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const maxTries = 3;
for (let i = 1; i <= maxTries; i += 1) {
  const numb = Math.round(Math.random() * 100);
  const answer = numb % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${numb}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === answer) {
    console.log('Correct!');
    if (i === maxTries) {
      console.log(`Congratulations, ${userName}!`);
    }
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
    break;
  }
}
