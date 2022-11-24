#!/usr/bin/env node
import { progression, rule } from '../src/games/progression.js';
import gameSession from '../src/index.js';

gameSession(progression, rule);
