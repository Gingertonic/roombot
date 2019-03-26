class Roomba {
  constructor(data){
    this.parseData(data);
    this.createRoom();
    this.placeRoomba(this.roombaCoords);
    this.addDirt();
  }

  parseData(data){
    const dataArr = data.split("\n");
    this.roomDimensions = dataArr.shift().split(" ");
    this.roombaCoords = dataArr.shift().split(" ");
    this.dirtPatches = dataArr.filter(set => {return /\d/.test(set)});
    this.directions = dataArr.filter(set => {return /[NESW]/.test(set)})[0];
    this.dirtStartCount = this.dirtPatches.length;
  }

  createRoom(){
    const { x, y } = this.parseCoordArray(this.roomDimensions);
    this.room = new Array();
    for (var i = 0; i < x; i++) {
      this.room[i] = new Array(y).fill(0);
    }
  }

  placeRoomba(coords){
    const { x, y } = this.parseCoordArray(coords)
    this.room[y][x] = "H"
  }

  addDirt(){
    this.dirtPatches.forEach(d => {
      const dirtCoords = d.split(" ")
      const { x, y } = this.parseCoordArray(dirtCoords);
      this.room[y][x] = "D";
    })
  }

  parseCoordArray(coords){
    let x = parseInt(coords[0]);
    let y = parseInt(coords[1]) === "0" ? 0 : parseInt(coords[1]);
    return { x, y };
  }

  cleanRoom() {
    this.directions.split("").forEach(direction => this.moveRoomba(direction));
  }

  moveRoomba(direction) {
    let { x, y } = this.parseCoordArray(this.findRoomba());
    this.replaceRoomba({ x, y });
    switch(direction){
      case "N": y += 1; break;
      case "E": x += 1; break;
      case "S": y -= 1; break;
      case "W": x -= 1; break;
    }
    this.placeRoomba([x, y]);
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

  findRoomba(){
    let y = this.room.findIndex(yRow => yRow.includes("H"));
    let x = this.room[y].findIndex(xPoint => xPoint === "H");
    return [x, y];
  }

  printResults(){
    const roombaLocation = this.findRoomba().join(" ");
    const dirtCount = this.countDirt();
    const cleanCount = this.dirtStartCount - dirtCount;
    console.log( roombaLocation);
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
