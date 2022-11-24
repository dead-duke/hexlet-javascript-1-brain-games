#!/usr/bin/env node
import readlineSync from 'readline-sync';
import random from '../random.js';

export const rule = 'What number is missing in the progression?';

export const progression = () => {
  const progressionStartValue = random(1, 20);
  const progressionStep = random(1, 5);
  const progressionLength = random(5, 10);
  const progressionEmptyPlace = random(0, progressionLength);

  let answer;
  const progressionList = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    const currentValue = progressionStartValue + i * progressionStep;

    if (i === progressionEmptyPlace) {
      progressionList.push('..');
      answer = String(currentValue);
    } else {
      progressionList.push(String(currentValue));
    }
  }

  console.log('Question:', ...progressionList);
  const userAnswer = readlineSync.question('Your answer: ');
  return [answer, userAnswer];
};
