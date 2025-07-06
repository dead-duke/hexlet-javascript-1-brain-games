import getRandomNumber from '../random.js'

const isPrime = (numb) => {
  if (numb === 1) {
    return false
  }

  const iter = (divisor) => {
    if (divisor === 1) {
      return true
    }
    if (numb % divisor === 0) {
      return false
    }
    return iter(divisor - 1)
  }

  return iter(Math.ceil(numb / 2))
}

export const startPrimeGame = () => {
  const numb = getRandomNumber(1, 100)
  const answer = isPrime(numb) ? 'yes' : 'no'
  const question = `Question: ${numb}`
  return [question, answer]
}

export const primeGameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".'
