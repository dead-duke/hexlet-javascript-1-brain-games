import readlineSync from 'readline-sync';
import getRandomNumber from '../random.js';

export const evenGameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

export const startEvenGame = () => {
  const numb = getRandomNumber(1, 100);
  console.log(`Question: ${numb}`);
  const answer = numb % 2 === 0 ? 'yes' : 'no';
  const userAnswer = readlineSync.question('Your answer: ');
  return [answer, userAnswer];
};
