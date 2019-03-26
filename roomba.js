const Helpers = require('./helpers.js');

class Roomba {
  constructor(data){
    this.parseData(data);
    this.createRoom();
    this.placeRoomba(this.roombaCoords);
    this.addDirt();
  }

  parseData(data){
    const dataArr = data.split("\n");
    this.roomDimensions = Helpers.extractFirstElement(dataArr);
    this.roombaCoords = Helpers.extractFirstElement(dataArr);
    this.dirtPatches = Helpers.filterDataBy(dataArr, /\d/);
    this.directions = Helpers.filterDataBy(dataArr, /[NESW]/)[0];
    this.dirtStartCount = this.dirtPatches.length;
  }

  createRoom(){
    const { x, y } = Helpers.parseCoordArray(this.roomDimensions);
    this.room = new Array();
    for (var i = 0; i < x; i++) {
      this.room[i] = new Array(y).fill(0);
    }
  }

  placeRoomba(coords){
    const { x, y } = Helpers.parseCoordArray(coords)
    this.room[y][x] = "H"
  }

  addDirt(){
    this.dirtPatches.forEach(d => {
      const dirtCoords = d.split(" ")
      const { x, y } = Helpers.parseCoordArray(dirtCoords);
      this.room[y][x] = "D";
    })
  }

  cleanRoom() {
    this.directions.split("").forEach(direction => this.moveRoomba(direction));
  }

  moveRoomba(direction) {
    let { x, y } = Helpers.parseCoordArray(this.findRoomba());
    this.replaceRoomba({ x, y });
    switch(direction){
      case "N": y += 1; break;
      case "E": x += 1; break;
      case "S": y -= 1; break;
      case "W": x -= 1; break;
    }
    this.placeRoomba([x, y]);
  }

  findRoomba(){
    let y = this.room.findIndex(yRow => yRow.includes("H"));
    let x = this.room[y].findIndex(xPoint => xPoint === "H");
    return [x, y];
  }

  replaceRoomba({ x, y }){
    this.room[y][x] = 0;
  }

  countDirt() {
    let dirtCount = 0;
    this.room.forEach(yRow => {
      yRow.forEach(xPoint => {
        xPoint === "D" ? dirtCount += 1 : null;
      })
    })
    return dirtCount;
  }

  printResults(){
    const roombaLocation = this.findRoomba().join(" ");
    const dirtCount = this.countDirt();
    const cleanCount = this.dirtStartCount - dirtCount;
    console.log(roombaLocation);
    console.log(cleanCount);
  }

}

module.exports = {
  Roomba
}



// Display Helper Methods
// printData() {
//   console.log(this.roomDimensions)
//   console.log(this.hooverCoords)
//   console.log(this.dirtPatches)
//   console.log(this.directions)
//   console.log(this.room)
// }

// printRoom() {
//   console.log(`4 || ${this.room[4][0]} | ${this.room[4][1]} | ${this.room[4][2]} | ${this.room[4][3]} | ${this.room[4][4]} |`)
//   console.log(`3 || ${this.room[3][0]} | ${this.room[3][1]} | ${this.room[3][2]} | ${this.room[3][3]} | ${this.room[3][4]} |`)
//   console.log(`2 || ${this.room[2][0]} | ${this.room[2][1]} | ${this.room[2][2]} | ${this.room[2][3]} | ${this.room[2][4]} |`)
//   console.log(`1 || ${this.room[1][0]} | ${this.room[1][1]} | ${this.room[1][2]} | ${this.room[1][3]} | ${this.room[1][4]} |`)
//   console.log(`0 || ${this.room[0][0]} | ${this.room[0][1]} | ${this.room[0][2]} | ${this.room[0][3]} | ${this.room[0][4]} |`)
//   console.log(`     0   1   2   3   4`)
// }
