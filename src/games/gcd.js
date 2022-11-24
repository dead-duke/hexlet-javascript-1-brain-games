#!/usr/bin/env node
import readlineSync from 'readline-sync';
import random from '../random.js';

export const rule = 'Find the greatest common divisor of given numbers.';

const getDivisors = (value) => {
  let divisors = [];
  for (let currentDivisor = Math.ceil(value / 2); currentDivisor > 1; currentDivisor -= 1) {
    if (value % currentDivisor === 0) {
      divisors = [currentDivisor, ...divisors];
    }
  }
  return [1, ...divisors, value];
};

const getMaxDivisor = (minValue, maxValue) => {
  if (maxValue % minValue === 0) {
    return minValue;
  }
  const maxValueDivisors = getDivisors(maxValue);
  const minValueDivisors = getDivisors(minValue);

  let maxDivisor;
  for (let currentDivisor = 0; currentDivisor < minValueDivisors.length; currentDivisor += 1) {
    if (maxValueDivisors.includes(currentDivisor)) {
      maxDivisor = currentDivisor;
    }
  }
  return maxDivisor;
};

const getValues = () => {
  const firstValue = random(1, 100);
  const secondValue = random(1, 100);
  const maxValue = Math.max(firstValue, secondValue);
  const minValue = Math.min(firstValue, secondValue);
  return [minValue, maxValue];
};

export const gcd = () => {
  const [minValue, maxValue] = getValues();
  const answer = String(getMaxDivisor(minValue, maxValue));
  console.log(`Question: ${minValue} ${maxValue}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return [answer, userAnswer];
};
