#!/usr/bin/env node
import readlineSync from 'readline-sync';
import random from '../random.js';

export const rule = 'What is the result of the expression?';

export const calc = () => {
  const firstOperand = random(1, 20);
  const secondOperand = random(1, 20);
  const operator = random(1, 3);
  let answer;
  switch (operator) {
    case 1:
      console.log(`Question: ${firstOperand} + ${secondOperand}`);
      answer = String(firstOperand + secondOperand);
      break;
    case 2:
      console.log(`Question: ${firstOperand} - ${secondOperand}`);
      answer = String(firstOperand - secondOperand);
      break;
    case 3:
      console.log(`Question: ${firstOperand} * ${secondOperand}`);
      answer = String(firstOperand * secondOperand);
      break;
    default:
      break;
  }

  const userAnswer = readlineSync.question('Your answer: ');
  return [answer, userAnswer];
};
