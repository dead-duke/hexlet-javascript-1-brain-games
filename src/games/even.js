import getRandomNumber from '../random.js';

const isPrime = (numb) => numb % 2 === 0;

export const startEvenGame = () => {
  const numb = getRandomNumber(1, 100);
  const answer = isPrime(numb) ? 'yes' : 'no';
  const question = `Question: ${numb}`;
  return [question, answer];
};

export const evenGameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
