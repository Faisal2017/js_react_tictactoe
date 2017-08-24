const xWins = "X Wins";
const oWins = "O Wins";

const gameLogic = function(tileArray) {

  let rowResult = ifRowWin(tileArray);
  if(rowResult === xWins) return xWins;
  if(rowResult === oWins) return oWins;

  let columnResult = ifColumnWin(tileArray);
  if(columnResult === xWins) return xWins;
  if(columnResult === oWins) return oWins;

  let diagonalResult = ifDiagonalWin(tileArray);
  if(diagonalResult === xWins) return xWins;
  if(diagonalResult === oWins) return oWins;

  let reverseDiagonalResult = reverseDiagonalWin(tileArray);
  if(reverseDiagonalResult === xWins) return xWins;
  if(reverseDiagonalResult === oWins) return oWins;

  if(ifDraw(tileArray) === "Draw") return "Draw";
}

const ifRowWin = function(tileArray){

  let counterX = 0;
  let counterO = 0;

  for(let row of tileArray){
    for(let tile of row){
      if(tile === "X") counterX++;
      if(tile === "O") counterO++;
    }
    if(counterX === row.length) return xWins;
    if(counterO === row.length) return oWins;
    counterX = 0;
    counterO = 0;
  }
  return;
}

const ifColumnWin = function(tileArray){

  let counterX = 0;
  let counterO = 0;

  for(let arrayIndex in tileArray){
    for(let row of tileArray){
      let tile = row[arrayIndex];
      if(tile === "X") counterX++;
      if(tile === "O") counterO++;
    }
    if(counterX === tileArray.length) return xWins;
    if(counterO === tileArray.length) return oWins;
    counterX = 0;
    counterO = 0;
  }
  return;
}

const ifDiagonalWin = function(tileArray) {

  let counterX = 0;
  let counterO = 0;

  for(arrayIndex in tileArray){
    let tile = tileArray[arrayIndex][arrayIndex];
    if(tile === "X") counterX++;
    if(tile === "O") counterO++;
  }
  if(counterX === tileArray.length) return xWins;
  if(counterO === tileArray.length) return oWins;
  counterX = 0;
  counterO = 0;
  return;
}

const reverseDiagonalWin = function(tileArray) {

  let counterX = 0;
  let counterO = 0;

  for(arrayIndex in tileArray){
    const rowLength = tileArray[arrayIndex].length;

    const tile = tileArray[arrayIndex][rowLength - 1 - arrayIndex];
    if(tile === "X") counterX++;
    if(tile === "O") counterO++;
  }
  if(counterX === tileArray.length) return xWins;
  if(counterO === tileArray.length) return oWins;
  counterX = 0;
  counterO = 0;
  return;
}

const ifDraw = function(tileArray){

  for(let row of tileArray){
    for(let tile of row){
      if(tile === " "){
        return;
      }
    }
  }
  return "Draw";
}


module.exports = gameLogic;