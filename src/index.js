import answerUserName from './cli.js';

const gameSession = (game) => {
  const userName = answerUserName();
  const maxTries = 3;
  for (let i = 1; i <= maxTries; i += 1) {
    const [answer, userAnswer] = game();
    if (userAnswer === answer) {
      console.log('Correct!');
      if (i === maxTries) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
};

export default gameSession;
