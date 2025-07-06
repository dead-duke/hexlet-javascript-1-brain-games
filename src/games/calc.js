import getRandomNumber from '../random.js'

const calc = (operand1, operand2, sign) => {
  switch (sign) {
    case 1: {
      const question = `Question: ${operand1} + ${operand2}`
      const answer = operand1 + operand2
      return [question, answer]
    }
    case 2: {
      const question = `Question: ${operand1} - ${operand2}`
      const answer = operand1 - operand2
      return [question, answer]
    }
    case 3: {
      const question = `Question: ${operand1} * ${operand2}`
      const answer = operand1 * operand2
      return [question, answer]
    }
    default:
      return false
  }
}

export const startCalcGame = () => {
  const operand1 = getRandomNumber(1, 20)
  const operand2 = getRandomNumber(1, 20)
  const sign = getRandomNumber(1, 3)
  const [question, answer] = calc(operand1, operand2, sign)
  return [question, String(answer)]
}

export const calcGameRule = 'What is the result of the expression?'
