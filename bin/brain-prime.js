#!/usr/bin/env node
import { prime, rule } from '../src/games/prime.js';
import gameSession from '../src/index.js';

gameSession(prime, rule);
