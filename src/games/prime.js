import readlineSync from 'readline-sync';
import getRandomNumber from '../random.js';

export const primeGameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const startPrimeGame = () => {
  const currentNumber = getRandomNumber(1, 100);
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
