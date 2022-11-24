import answerUserName from './cli.js';

const gameSession = (game, rule) => {
  const userName = answerUserName();
  console.log(rule);
  const maxTries = 3;
  for (let currentTry = 1; currentTry <= maxTries; currentTry += 1) {
    const [answer, userAnswer] = game();
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      break;
    }

    console.log('Correct!');
    if (currentTry === maxTries) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameSession;
