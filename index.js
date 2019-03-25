#!/usr/bin/env node

// 'use strict';

var fs = require('fs');
const Tools = require('./hoover.js')

fs.readFile('input.txt', 'utf8', function(err, data) {
    if (err) throw err;
    const roombot = new Tools.Roomba(data)
});
