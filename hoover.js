
let room;

const hooverRoom = data => {
  parseData(data)
  // printRoom(room)
}

//
// const room = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0]
// ]



 // set room grid
// 4 || 0 | 0 | 0 | 0 | 0 |
// 3 || 0 | 0 | 0 | 0 | 0 |
// 2 || 0 | 0 | 0 | 0 | 0 |
// 1 || 0 | 0 | 0 | 0 | 0 |
// 0 || 0 | 0 | 0 | 0 | 0 |
//      0   1   2   3   4
//
//  // set hoover position
// 4 || 0 | 0 | 0 | 0 | 0 |
// 3 || 0 | 0 | 0 | 0 | 0 |
// 2 || 0 | H | 0 | 0 | 0 |
// 1 || 0 | 0 | 0 | 0 | 0 |
// 0 || 0 | 0 | 0 | 0 | 0 |
//      0   1   2   3   4
//
// // set dirt position
// 4 || 0 | 0 | 0 | 0 | 0 |
// 3 || 0 | 0 | D | 0 | 0 |
// 2 || 0 | H | D | 0 | 0 |
// 1 || 0 | 0 | 0 | 0 | 0 |
// 0 || 0 | D | 0 | 0 | 0 |
//      0   1   2   3   4
//
//
// getPoint(2, 3) //=> D
//

const parseData = data => {
  let dataArr = data.split("\n")
  let roomCoords = dataArr.shift().split(" ")
  let hooverCoords = dataArr.shift().split(" ")
  let dirtPatches = dataArr.filter(set => {return /\d/.test(set)})
  let directions = dataArr.filter(set => {return /[NESW]/.test(set)})
  console.log(roomCoords)
  console.log(hooverCoords)
  console.log(dirtPatches)
  console.log(directions)
}


const printRoom = room => {
  console.log(`4 || ${room[4][0]} | ${room[4][1]} | ${room[4][2]} | ${room[4][3]} | ${room[4][4]} |`)
  console.log(`3 || ${room[3][0]} | ${room[3][1]} | ${room[3][2]} | ${room[3][3]} | ${room[3][4]} |`)
  console.log(`2 || ${room[2][0]} | ${room[2][1]} | ${room[2][2]} | ${room[2][3]} | ${room[2][4]} |`)
  console.log(`1 || ${room[1][0]} | ${room[1][1]} | ${room[1][2]} | ${room[1][3]} | ${room[1][4]} |`)
  console.log(`0 || ${room[0][0]} | ${room[0][1]} | ${room[0][2]} | ${room[0][3]} | ${room[0][4]} |`)
  console.log(`     0   1   2   3   4`)
}

module.exports = {
  hooverRoom
}
