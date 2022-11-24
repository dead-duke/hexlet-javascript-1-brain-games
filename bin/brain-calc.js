#!/usr/bin/env node
import { calc, rule } from '../src/games/calc.js';
import gameSession from '../src/index.js';

gameSession(calc, rule);
