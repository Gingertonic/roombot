const assert = require('assert');
const Helpers = require('../helpers.js');
const C = require('./bash-colors.js');

const parseCoordArray = () => {
  console.log(`\n${C.bright}parseCoordArray should return an object representing the array passed in${C.reset}`)
  let coords = ['1', '2']
  let result = Helpers.parseCoordArray(coords)
  let expected = { x: 1, y: 2 }
  try {
      assert.equal(result.x, expected.x);
      assert.equal(result.y, expected.y);
      console.log(`${C.grnb}Passed.${C.reset}`);
    } catch (error) {
      console.error(`${C.redb}Failed.${reset}`);
      console.log(`\t${C.grn}+ ${C.reset}Expected: {${expected.x}, ${expected.y}}`);
      console.log(`\t${C.red}- ${C.reset}Received: {${result.x}, ${result.y}}`);
    }
  }

const extractFirstElement = () => {
  console.log(`\n${C.bright}extractFirstElement should remove the first element from an array, split it into a new array and return it${C.reset}`)
  let dataArr = ['hello world', '1 2', 'testing 1 2 3']
  let result = Helpers.extractFirstElement(dataArr)
  let expected = ["hello", "world"]
  try {
      assert.equal(result[0], expected[0]);
      console.log(`${C.grnb}Passed.${C.reset}`);
    } catch (error) {
      console.error(`${C.redb}Failed.${C.reset}`);
      console.log(`\t${C.grn}+ ${C.reset}Expected: ${expected}`);
      console.log(`\t${C.red}- ${C.reset}Received: ${result}`);
    }
  }

  const filterDataBy = () => {
    console.log(`\n${C.bright}filterDataBy should take an array and extract the elements containing directions${C.reset}`)
    let dataArr = ['0 1', '1 2', '4 2', 'NNE', 'testing', 'S']
    let condition = /[NESW]/
    let result = Helpers.filterDataBy(dataArr, condition).length
    let expected = 2
    try {
        assert.equal(result, expected);
        console.log(`${C.grnb}Passed.${C.reset}`);
      } catch (error) {
        console.error(`${C.redb}Failed.${C.reset}`);
        console.log(`\t${C.grn}+ ${C.reset}Expected: ${expected}`);
        console.log(`\t${C.red}- ${C.reset}Received: ${result}`);
      }
    }

  module.exports = {
    parseCoordArray,
    extractFirstElement,
    filterDataBy
  }
