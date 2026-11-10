Problem
Surrounded Regions
LeetCode #130
↗
Medium
✓ Solved

›
details
Border-connected O's are safe
Given a grid of X and O cells, flip to X every region of O cells that is fully surrounded, 
that is, any region not connected 4-directionally to an O on the grid border.



function sweep(board){
 let rows = board.length;
let cols= board[0].length;
const direction= [
[-1, 0],
[1, 0],
[0, -1],
[0, 1]
];

function dfs(row,col){
if(row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] !== "0" ){
return;
}

board[row][col] = "S";

for(let [dr, dc] of direction){
let newRow = row + dr;
let newCol = col + dc;

dfs(newRow, newCol);
}
}

for(let row=0; row<rows; row++){
dfs(row, 0);
dfs(row, col -1);
}
for(let col=0;col<cols; col++){
dfs(0, col);
dfs(row-1, col);
}

for(let row=0; row<rows; row++){
for(let col=0; col<cols; col++){
if(board[row][col] === "0"){
board[row][col] = "X";
}else if (board[row][col] === "S" ){
board[row][col] = "0";
}
}
}
}
