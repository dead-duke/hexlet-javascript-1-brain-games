#!/usr/bin/env node
import { startProgressionGame, progressionGameRule } from '../src/games/progression.js';
import startGameSession from '../src/index.js';

startGameSession(startProgressionGame, progressionGameRule);
