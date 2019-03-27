const assert = require('assert');
const HelperTests = require('./tests/helpers-test.js');
const C = require('./tests/bash-colors.js');


console.log(`\n${C.mag}${C.bright}Roomba Helper Testing${C.reset}`)
HelperTests.parseCoordArray()
HelperTests.extractFirstElement()
HelperTests.filterDataBy()
