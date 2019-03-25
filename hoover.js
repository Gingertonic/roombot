
class Roomba {
  // let room;
  constructor(data){
    this.parseData(data)
  }

  hooverRoom(data){
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
  parseData(data){
    const dataArr = data.split("\n")
    this.roomCoords = dataArr.shift().split(" "),
    this.hooverCoords = dataArr.shift().split(" "),
    this.dirtPatches = dataArr.filter(set => {return /\d/.test(set)}),
    this.directions = dataArr.filter(set => {return /[NESW]/.test(set)})
  }

  printData() {
    console.log(this.roomCoords)
    console.log(this.hooverCoords)
    console.log(this.dirtPatches)
    console.log(this.directions)
  }
  //
  //
  // const printRoom = room => {
  //   console.log(`4 || ${room[4][0]} | ${room[4][1]} | ${room[4][2]} | ${room[4][3]} | ${room[4][4]} |`)
  //   console.log(`3 || ${room[3][0]} | ${room[3][1]} | ${room[3][2]} | ${room[3][3]} | ${room[3][4]} |`)
  //   console.log(`2 || ${room[2][0]} | ${room[2][1]} | ${room[2][2]} | ${room[2][3]} | ${room[2][4]} |`)
  //   console.log(`1 || ${room[1][0]} | ${room[1][1]} | ${room[1][2]} | ${room[1][3]} | ${room[1][4]} |`)
  //   console.log(`0 || ${room[0][0]} | ${room[0][1]} | ${room[0][2]} | ${room[0][3]} | ${room[0][4]} |`)
  //   console.log(`     0   1   2   3   4`)
  // }
}

module.exports = {
  Roomba
}
