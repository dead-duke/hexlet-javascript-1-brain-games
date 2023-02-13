#!/usr/bin/env node
import { startEvenGame, evenGameRule } from '../src/games/even.js';
import startGameSession from '../src/index.js';

startGameSession(startEvenGame, evenGameRule);
