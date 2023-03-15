import getRandomNumber from '../random.js';

const isEven = (numb) => numb % 2 === 0;

export const startEvenGame = () => {
  const numb = getRandomNumber(1, 100);
  const answer = isEven(numb) ? 'yes' : 'no';
  const question = `Question: ${numb}`;
  return [question, answer];
};

export const evenGameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
