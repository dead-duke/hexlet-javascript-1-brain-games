#!/usr/bin/env node
import { even, rule } from '../src/games/even.js';
import gameSession from '../src/index.js';

gameSession(even, rule);
