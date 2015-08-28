/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

// rooksSolutions is object where key is n and value is array of passing boards


window.findNRooksSolution = function(n) {

};




window.countNRooksSolutions = function(n) {  
  var solutionCount = 0;
  var board = new Board({n:n});

  // inner recursive function that takes in the current row
  var getSolutions = function(row) {
    //console.log(row + " " + n)
    // BASE CASE: check if row that we are on is === n
    if (row === n) {
      // WE FOUND A SOLUTION: increment solutionCount
      solutionCount++;
      return;
    }
  // loop from 0 to n (each element in a row)
    for (var i = 0; i < n; i++) {
    // toggle on
      board.togglePiece(row, i);
    // check if valid for rooks
      if (!board.hasAnyRooksConflicts()) {
        // if valid, recurse
        getSolutions(row+1);
      }
    // toggle off
      board.togglePiece(row, i);
    }
  }

  // initiate recursive function
  getSolutions(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount); 
  return solutionCount;
};




window.findNQueensSolution = function(n) {
  return solution;
};


window.countNQueensSolutions = function(n) {

};
