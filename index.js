#!/usr/bin/env node

var fs = require('fs');
const Tools = require('./roomba.js');

console.clear();

fs.readFile('input.txt', 'utf8', function(err, data) {
    if (err) throw err;
    const roombot = new Tools.Roomba(data);
    roombot.cleanRoom();
    roombot.printResults();
});
