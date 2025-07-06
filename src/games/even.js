import getRandomNumber from '../random.js'

export const startEvenGame = () => {
  const numb = getRandomNumber(1, 100)
  const isEven = numb % 2 === 0
  const answer = isEven ? 'yes' : 'no'
  const question = `Question: ${numb}`
  return [question, answer]
}

export const evenGameRule = 'Answer "yes" if the number is even, otherwise answer "no".'
