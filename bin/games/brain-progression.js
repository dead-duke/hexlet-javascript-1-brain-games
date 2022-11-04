#!/usr/bin/env node
import readlineSync from 'readline-sync';
import gameSession from '../index.js';
import random from '../random.js';

console.log('What number is missing in the progression?');

const brainProgression = () => {
  const progressionStartValue = random(1, 20);
  const progressionStep = random(1, 5);
  const progressionLength = random(5, 10);
  const progressionEmptyPlace = random(0, progressionLength);

  let answer;
  const progression = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    const currentValue = progressionStartValue + i * progressionStep;

    if (i === progressionEmptyPlace) {
      progression.push('..');
      answer = currentValue;
    } else {
      progression.push(String(currentValue));
    }
  }

  console.log('Question: ', ...progression);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  return [answer, userAnswer];
};

gameSession(brainProgression);
