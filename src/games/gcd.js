import getRandomNumber from '../random.js';

const getGcd = (numb1, numb2) => {
  const iter = (divisor) => {
    if (numb1 % divisor === 0 && numb2 % divisor === 0) {
      return divisor;
    }
    return iter(divisor - 1);
  };

  return iter(Math.min(numb1, numb2));
};

export const startGcdGame = () => {
  const numb1 = getRandomNumber(1, 100);
  const numb2 = getRandomNumber(1, 100);
  const answer = getGcd(numb1, numb2);
  const question = `Question: ${numb1} ${numb2}`;
  return [question, String(answer)];
};

export const gcdGameRule = 'Find the greatest common divisor of given numbers.';
