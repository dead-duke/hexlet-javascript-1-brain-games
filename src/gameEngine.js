import readlineSync from 'readline-sync'

const startGameSession = (startGame, gameRule) => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log(gameRule)

  const maxTries = 3
  const iter = (tries) => {
    if (tries === 0) {
      console.log(`Congratulations, ${userName}!`)
      return true
    }

    const [question, answer] = startGame()
    console.log(question)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`)
      return false
    }
    console.log('Correct!')
    return iter(tries - 1)
  }

  return iter(maxTries)
}

export default startGameSession
