#!/usr/bin/env node
 
const fs = require("fs");
const path = require('path');
const output = fs.readFileSync(path.join(__dirname, 'bin/output'), 'utf8');
console.log(output);