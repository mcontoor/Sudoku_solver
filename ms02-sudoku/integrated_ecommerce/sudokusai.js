
function sudoku(puzzle){
    var nonPossibilities = {},impossibleNumbers,emptyspaces=81;
    while(emptyspaces>0){
        emptyspaces=0;
for(var i=0; i<puzzle.length;i++){
    for(var j=0; j<puzzle.length;j++){
        if(puzzle[i][j]==0){
            nonPossibilities = {};
            for(var a=0; a<9;a++){
                if(puzzle[i][a]>0){
                    nonPossibilities[puzzle[i][a]] = true;
                }
                if(puzzle[a][j]>0){
                    nonPossibilities[puzzle[a][j]] = true;
                }
            }
            for(var p=Math.floor(i/3)*3; p<Math.floor(i/3)*3+3;p++)
            {
                for(var q=Math.floor(j/3)*3; q<Math.floor(j/3)*3+3;j++){
                     if(puzzle[p][q]){
                         nonPossibilities[puzzle[p][q]] = true;
                     }
                }
            }
            impossibleNumbers=Object.keys(nonPossibilities);
            if(impossibleNumbers==8){
                for(var i=1; i<10;i++){
                    if(impossibleNumbers.indexOf(i.toString())<0){
                          puzzle[i][j]=i;
                    }
                }
            }
            else{
                emptyspaces++;
            }

        }
    }
}
}
}
var puzzle = [[1,0,5,8,0,2,0,0,0],
            [0,9,0,0,7,6,4,0,5],
            [2,0,0,4,0,0,8,1,9],
            [0,1,9,0,0,7,3,0,6],
            [7,6,2,0,8,3,0,9,0],
            [0,0,0,0,6,1,0,5,0],
            [0,0,7,6,0,0,0,3,0],
            [4,3,0,0,2,0,5,0,1],
            [6,0,0,3,0,8,9,0,0]]
            console.log(sudoku(puzzle));

