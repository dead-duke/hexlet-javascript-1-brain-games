import readlineSync from 'readline-sync';
import getRandomNumber from '../random.js';

export const progressionGameRule = 'What number is missing in the progression?';

export const startProgressionGame = () => {
  const progressionStartValue = getRandomNumber(1, 20);
  const progressionStep = getRandomNumber(1, 5);
  const progressionLength = getRandomNumber(5, 10);
  const progressionEmptyPlace = getRandomNumber(0, progressionLength);

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
