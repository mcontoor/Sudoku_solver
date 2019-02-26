var p1 = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
// var p2 = "--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3";
// var p3 = "29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9";
// var p4 = "-8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-";
// var p5 = "6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--";
// var p6 = "---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----";
// var p7 = "-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--";
// var p8 = "-96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7";
// var p9 = "----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----";
// var p10 = "3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--";
// var p11 = "3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-";
// var p12 = "-2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-";
// var p13 = "--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--";
// var p14 = "----------2-65-------18--4--9----6-4-3---57-------------------73------9----------";
// var p15 = "---------------------------------------------------------------------------------";



var sudokustring = p1.split("").map(function(x){return x.replace(/-/g, '0');}).map(Number);
//console.log(sudokustring)

function sudokuboard() {
  var array1 = [];
for (var i = 0; i < 9; i++) {
  var arr = [];
  for (var j = 0; j < 9; j++) {
    arr.push(sudokustring[(i * 9) + j]);
  }
  array1.push(arr);
}
return array1;
};

var sudoku = sudokuboard();
console.log(sudoku);

function saveEmptyPositions() {
  var emptyPositions = [];
  for (var i=0; i<sudoku.length; i++) {
    for (var j=0; j<sudoku[i].length; j++) {
      if (sudoku[i][j] === 0) {
        emptyPositions.push([i,j]);
      }
    }
  }
  return emptyPositions;
};

var emptyCells = saveEmptyPositions();
//console.log(emptyCells);

var checkRow = function(sudoku,row,value) {
    for (var j=0; j<sudoku[row].length; j++) {
      if (sudoku[row][j] === value) {
        return false;
    }
    }
  return true;
  }
// console.log(checkRow(sudoku,0,7));

var checkCol = function(sudoku, column, value) {
  for (var j=0; j< sudoku.length; j++) {
    if (sudoku[j][column] === value) {
      return false;
    }
  }
      return true;
}
// console.log(checkCol(sudoku,0,7));

var checkBlock = function(sudoku, column, row, value) {
  var colCorner = 0.
      rowCorner = 0,
      squareSize = 3;
  while (column >= colCorner + squareSize) {
    colCorner += squareSize;
  }
  while (row >= rowCorner + squareSize) {
    rowCorner += squareSize;
  }
  for (var i = rowCorner; i<rowCorner + squareSize; i++) {
        for (var j = colCorner; j<colCorner + squareSize; j++) {
            if (sudoku[i][j] === value) {
              return false;
          }
                
       }
      }
      return true;
    }


// console.log(checkBlock(sudoku, 4, 3, 8));
// var curr = [];
// var stack = [];
// function solve() {
//   for (var i=0; i<emptyCells.length;) {
//     var row = emptyCells[i][0];
//     var col = emptyCells[i][1];
//       for (number=1;number<10;number++) {
//         if (sudoku[row][col] === 0) {
//           if (checkRow(sudoku,row,number)===true && checkCol(sudoku,col,number)===true && checkBlock(sudoku,col,row,number)===true) {
//             sudoku[row][col] = number;
//             stack.push([row,col]);
//             console.log("stack", stack);
//             console.log("if", sudoku[row][col]);
//             number=0;
//           }
//           else if (number>8) {
//               sudoku[row][col]=0;
//               curr = stack.pop();
//               row = curr[0];
//               col = curr[1];
//               number = sudoku[row][col];
//               sudoku[row][col]=0;
//               // console.log("pop",row, col);
              
//       }
//       else {
//         i--;
//         }
//       }
//     }
//     i++;
//       }
  
  
//     return sudoku;
//   }


// console.log(solve());


var curr = [];
var stack = [];
function solve() {
  
  for (var i=0; i<sudoku.length;) {
    for (var j=0;j<sudoku[i].length;) {
      for (number=1;number<10;number++) {
        if (sudoku[i][j] === 0) {
          if (checkRow(sudoku,i,number)===true && checkCol(sudoku,j,number)===true && checkBlock(sudoku,j,i,number)===true) {
            sudoku[i][j] = number;
            stack.push([i,j]);
            console.log("stack", stack);
            console.log("if", sudoku[i][j]);
            number=0;
          }
          else if (number>8) {
              console.log("else", sudoku[i][j]);
              sudoku[i][j]=0;
              i,curr = stack.pop();
              j = curr[1];
              number = sudoku[i][j];
              sudoku[i][j]=0;
              console.log("pop",i, j);
              
      }
    }
      }
      j++;
    }
    i++;
  }
  return sudoku;
}

console.log(solve());
