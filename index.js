#!/usr/bin/env node

'use strict';

var fs = require('fs');
const Hoover = require('./hoover.js')

fs.readFile('input.txt', 'utf8', function(err, data) {
    if (err) throw err;
    Hoover.hooverRoom(data);
});
