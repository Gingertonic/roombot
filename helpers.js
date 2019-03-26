const extractFirstElement = dataArr => {
  return dataArr.shift().split(" ");
}

const filterDataBy = (dataArr, condition) => {
  return dataArr.filter(set => {return condition.test(set)})
}

const parseCoordArray = coords => {
  let x = parseInt(coords[0]);
  let y = parseInt(coords[1]) === "0" ? 0 : parseInt(coords[1]);
  return { x, y };
}

module.exports = {
  extractFirstElement,
  filterDataBy,
  parseCoordArray
}
