
class Roomba {
  constructor(data){
    this.parseData(data)
    this.createRoom()
    this.printRoom()
    // this.populateRoom()
    this.printData()
  }

  createRoom(){
    const { x, y } = this.getCoordArray(this.roomDimensions)
    this.room = new Array(x).fill(new Array(y).fill(0))
  }

  // populateRoom(){
  //   this.hooverCoords
  // }

  getCoordArray(coords){
    return {x: parseInt(coords[0]), y: parseInt(coords[1])}
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
    this.roomDimensions = dataArr.shift().split(" "),
    this.hooverCoords = dataArr.shift().split(" "),
    this.dirtPatches = dataArr.filter(set => {return /\d/.test(set)}),
    this.directions = dataArr.filter(set => {return /[NESW]/.test(set)})
  }

  printData() {
    console.log(this.roomDimensions)
    console.log(this.hooverCoords)
    console.log(this.dirtPatches)
    console.log(this.directions)
    console.log(this.room)
  }

  printRoom() {
    console.log(`4 || ${this.room[4][0]} | ${this.room[4][1]} | ${this.room[4][2]} | ${this.room[4][3]} | ${this.room[4][4]} |`)
    console.log(`3 || ${this.room[3][0]} | ${this.room[3][1]} | ${this.room[3][2]} | ${this.room[3][3]} | ${this.room[3][4]} |`)
    console.log(`2 || ${this.room[2][0]} | ${this.room[2][1]} | ${this.room[2][2]} | ${this.room[2][3]} | ${this.room[2][4]} |`)
    console.log(`1 || ${this.room[1][0]} | ${this.room[1][1]} | ${this.room[1][2]} | ${this.room[1][3]} | ${this.room[1][4]} |`)
    console.log(`0 || ${this.room[0][0]} | ${this.room[0][1]} | ${this.room[0][2]} | ${this.room[0][3]} | ${this.room[0][4]} |`)
    console.log(`     0   1   2   3   4`)
  }
}

module.exports = {
  Roomba
}
