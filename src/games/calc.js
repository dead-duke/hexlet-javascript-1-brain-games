import readlineSync from 'readline-sync';
import getRandomNumber from '../random.js';

export const calcGameRule = 'What is the result of the expression?';

export const startCalcGame = () => {
  const firstOperand = getRandomNumber(1, 20);
  const secondOperand = getRandomNumber(1, 20);
  const operator = getRandomNumber(1, 3);
  let answer;
  switch (operator) {
    case 1:
      console.log(`Question: ${firstOperand} + ${secondOperand}`);
      answer = String(firstOperand + secondOperand);
      break;
    case 2:
      console.log(`Question: ${firstOperand} - ${secondOperand}`);
      answer = String(firstOperand - secondOperand);
      break;
    case 3:
      console.log(`Question: ${firstOperand} * ${secondOperand}`);
      answer = String(firstOperand * secondOperand);
      break;
    default:
      break;
  }

  const userAnswer = readlineSync.question('Your answer: ');
  return [answer, userAnswer];
};
