#!/usr/bin/env node
import readlineSync from 'readline-sync';
import gameSession from '../index.js';
import random from '../random.js';

console.log('Find the greatest common divisor of given numbers.');

const getMaxDivider = (firstValue, secondValue) => {
  const maxValue = Math.max(firstValue, secondValue);
  const minValue = Math.min(firstValue, secondValue);
  if (maxValue % minValue === 0) {
    return minValue;
  }

  const maxValueDividers = [1, maxValue];
  for (let i = Math.ceil(maxValue / 2); i > 1; i -= 1) {
    if (maxValue % i === 0) {
      maxValueDividers.push(i);
    }
  }
  maxValueDividers.sort((a, b) => a - b);
  let maxDiveder;
  for (let i = Math.ceil(minValue / 2); i > 0; i -= 1) {
    if (minValue % i === 0 && maxValueDividers.includes(i)) {
      maxDiveder = i;
      break;
    }
  }

  return maxDiveder;
};

const brainGCD = () => {
  const firstValue = random(1, 100);
  const secondValue = random(1, 100);

  const answer = getMaxDivider(firstValue, secondValue);
  console.log(`Question: ${firstValue} ${secondValue}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  return [answer, userAnswer];
};

gameSession(brainGCD);
