
class Roomba {
  constructor(data){
    this.parseData(data)
    this.createRoom()
    this.placeHoover(this.hooverCoords)
    this.addDirt()
    this.printRoom()
    this.cleanRoom()
    // this.printRoom()
  }

  createRoom(){
    const { x, y } = this.parseCoordArray(this.roomDimensions)
    this.room = new Array()
    for (var i = 0; i < x; i++) {
      this.room[i] = new Array(y).fill(0)
    }
  }

  placeHoover(coords){
    const { x, y } = this.parseCoordArray(coords)
    this.room[y][x] = "H"
  }

  addDirt(){
    this.dirtPatches.forEach(d => {
      const dirtCoords = d.split(" ")
      const { x, y } = this.parseCoordArray(dirtCoords)
      this.room[y][x] = "D"
    })
  }

  parseCoordArray(coords){
    console.log(coords)
    let x = parseInt(coords[0])
    let y = parseInt(coords[1]) === "0" ? 0 : parseInt(coords[1])
    return { x, y }
  }

  parseData(data){
    const dataArr = data.split("\n")
    this.roomDimensions = dataArr.shift().split(" "),
    this.hooverCoords = dataArr.shift().split(" "),
    this.dirtPatches = dataArr.filter(set => {return /\d/.test(set)}),
    this.directions = dataArr.filter(set => {return /[NESW]/.test(set)})[0]
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

  cleanRoom() {
    this.directions.split("").forEach(direction => this.moveHoover(direction))
  }

  moveHoover(direction) {
    let y = this.room.findIndex(yRow => yRow.includes("H"))
    let x = this.room[y].findIndex(xPoint => xPoint === "H")
    this.replaceHoover({ x, y })
    console.log(x, y)
    switch(direction){
      case "N": y += 1; break;
      case "E": x += 1; break;
      case "S": y -= 1; break;
      case "W": x -= 1; break;
    }
    this.placeHoover([x, y])
    this.printRoom()
  }

  replaceHoover({ x, y }){
    this.room[y][x] = 0;
  }

  // printResults(){
  //   const hooverLocation = findRoomba()
  //   const cleanCount = this.cleanCount
  //   console.log(hooverLocation)
  //   console.log(cleanCount)
  // }

}

module.exports = {
  Roomba
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
