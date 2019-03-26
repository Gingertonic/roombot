#!/usr/bin/env node

var fs = require('fs');
const Appliances = require('./roomba.js');

// console.clear();

fs.readFile('input.txt', 'utf8', function(err, data) {
    if (err) throw err;
    const roombot = new Appliances.Roomba(data);
    roombot.cleanRoom();
    roombot.printResults();
});
