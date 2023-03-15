import getRandomNumber from '../random.js';

const getProgression = (start, step, length, emptyIndex) => {
  const iter = (acc, index = 0, answer = null) => {
    if (acc.length === length) {
      return [answer, acc];
    }

    const value = start + index * step;
    if (index === emptyIndex) {
      return iter([...acc, '..'], index + 1, value);
    }
    return iter([...acc, value], index + 1, answer);
  };

  return iter([]);
};

export const startProgressionGame = () => {
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 5);
  const length = getRandomNumber(5, 10);
  const emptyIndex = getRandomNumber(0, length);
  const [answer, progression] = getProgression(start, step, length, emptyIndex);
  const question = `'Question: ${progression.join(' ')}'`;
  return [question, String(answer)];
};

export const progressionGameRule = 'What number is missing in the progression?';
