#!/usr/bin/env node
import { startCalcGame, calcGameRule } from '../src/games/calc.js';
import startGameSession from '../src/index.js';

startGameSession(startCalcGame, calcGameRule);
