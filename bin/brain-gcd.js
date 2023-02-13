#!/usr/bin/env node
import { startGcdGame, gcdGameRule } from '../src/games/gcd.js';
import startGameSession from '../src/index.js';

startGameSession(startGcdGame, gcdGameRule);
