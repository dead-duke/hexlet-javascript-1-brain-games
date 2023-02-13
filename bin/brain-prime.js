#!/usr/bin/env node
import { startPrimeGame, primeGameRule } from '../src/games/prime.js';
import startGameSession from '../src/index.js';

startGameSession(startPrimeGame, primeGameRule);
