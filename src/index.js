// @flow

import { readFileSync } from 'fs';
import { join } from 'path';

const foo = readFileSync(join(__dirname, 'coverage.json'));

const fooParsed = JSON.parse(foo)['src/FilterGroup.js'];

console.log(JSON.stringify(fooParsed, null, 2));
