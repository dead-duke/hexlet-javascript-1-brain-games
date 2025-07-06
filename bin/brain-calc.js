#!/usr/bin/env node
import { startCalcGame, calcGameRule } from '../src/games/calc.js'
import startGameSession from '../src/gameEngine.js'

startGameSession(startCalcGame, calcGameRule)
