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
  var solution = [];
  var added = false;
  var board = new Board({n:n});

  // inner recursive function that takes in the current row
  var getSolutions = function(row) {
    //console.log(row + " " + n)
    // BASE CASE: check if row that we are on is === n
    if (row === n) {
      // WE FOUND A SOLUTION: increment solutionCount
      for(var i = 0; i < n;i++) {
        solution.push(board.get(i).slice());
      }
      added = true;
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
        if(added) {
          return;
        }
      }
    // toggle off
      board.togglePiece(row, i);
    }
  }

  // initiate recursive function
  getSolutions(0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution || board.rows();
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
  var solution = [];
  var added = false;
  var board = new Board({n:n});

  // inner recursive function that takes in the current row
  var getSolutions = function(row) {
    //console.log(row + " " + n)
    // BASE CASE: check if row that we are on is === n
    if (row === n) {
      // WE FOUND A SOLUTION: increment solutionCount
      for(var i = 0; i < n;i++) {
        solution.push(board.get(i).slice());
      }
      added = true;
      return;
    }
  // loop from 0 to n (each element in a row)
    for (var i = 0; i < n; i++) {
    // toggle on
      board.togglePiece(row, i);
    // check if valid for rooks
      if (!board.hasAnyQueensConflicts()) {
        // if valid, recurse
        getSolutions(row+1);
        if(added) {
          return;
        }
      }
    // toggle off
      board.togglePiece(row, i);
    }
  }

  // initiate recursive function
  getSolutions(0);
  


  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  // if(solution.length == 0) {
  //   return board.rows();
  // }
  return solution.length ? solution : board.rows();
};


window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});
  // if(n === 0) {
  //   return 0;
  // }

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
      if (!board.hasAnyQueensConflicts()) {
        // if valid, recurse
        getSolutions(row+1);
      }
    // toggle off
      board.togglePiece(row, i);
    }
  }

  // initiate recursive function
  getSolutions(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount); 
  return solutionCount;
};
