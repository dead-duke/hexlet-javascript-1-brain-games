import userName from './brain-games.js';

const gameSession = (func, name = userName) => {
  const maxTries = 3;
  for (let i = 1; i <= maxTries; i += 1) {
    const [answer, userAnswer] = func();
    if (userAnswer === answer) {
      console.log('Correct!');
      if (i === maxTries) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
      break;
    }
  }
};

export default gameSession;
