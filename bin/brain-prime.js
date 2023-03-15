#!/usr/bin/env node
import { startPrimeGame, primeGameRule } from '../src/games/prime.js';
import startGameSession from '../src/gameEngine.js';

startGameSession(startPrimeGame, primeGameRule);
