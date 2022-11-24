#!/usr/bin/env node
import { gcd, rule } from '../src/games/gcd.js';
import gameSession from '../src/index.js';

gameSession(gcd, rule);
