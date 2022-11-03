#!/usr/bin/env node
import readlineSync from 'readline-sync';
import gameSession from '../index.js';
import random from '../random.js';

console.log('What is the result of the expression?');

const evenNumbers = () => {
  const firstOperand = random(1, 20);
  const secondOperand = random(1, 20);
  const operator = random(1, 3);
  let answer;
  switch (operator) {
    case 1:
      console.log(`Question: ${firstOperand} + ${secondOperand}`);
      answer = firstOperand + secondOperand;
      break;
    case 2:
      console.log(`Question: ${firstOperand} - ${secondOperand}`);
      answer = firstOperand - secondOperand;
      break;
    case 3:
      console.log(`Question: ${firstOperand} * ${secondOperand}`);
      answer = firstOperand * secondOperand;
      break;
    default:
      break;
  }
  const userAnswer = Number(readlineSync.question('Your answer: '));
  return [answer, userAnswer];
};

gameSession(evenNumbers);
