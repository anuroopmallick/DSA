// Problem Description

// Given character matrix A of dimensions N×M consisting of O's and X's, where O = white, X = black.








// Return the number of black shapes. A black shape consists of one or more adjacent X's (diagonals not included)





// Problem Constraints

// 1 <= N, M <= 1000








// A[i][j] = 'X' or 'O'





// Input Format

// The First and only argument is character matrix A.



// Output Format

// Return a single integer denoting number of black shapes.



// Example Input

// Input 1:

//  A = [ [X, X, X], [X, X, X], [X, X, X] ]
// Input 2:

//  A = [ [X, O], [O, X] ]


// Example Output

// Output 1:

//  1
// Output 2:

//  2


// Example Explanation

// Explanation 1:

//  All X's belong to single shapes
// Explanation 2:

//  Both X's belong to different shapes


function Queue() {
  var a = [],
    b = 0;
  this.getLength = function () {
    return a.length - b;
  };
  this.isEmpty = function () {
    return 0 == a.length;
  };
  this.enqueue = function (b) {
    a.push(b);
  };
  this.dequeue = function () {
    if (0 != a.length) {
      var c = a[b];
      2 * ++b >= a.length && ((a = a.slice(b)), (b = 0));
      return c;
    }
  };
  this.peek = function () {
    return 0 < a.length ? a[b] : void 0;
  };
}

class Node {
  constructor(x, y) {
    this.first = x;
    this.second = y;
  }
}

String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substr(0, index) +
    replacement +
    this.substr(index + replacement.length)
  );
};
let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];
let N;
let M;
function is_valid(x, y) {
  if (x < 0 || x >= N || y < 0 || y >= M) return false;
  return true;
}

function bfs(i, j, Vec) {
  let Que = new Queue();
  Que.enqueue(new Node(i, j));

  while (!Que.isEmpty()) {
    let P = Que.dequeue();
    Vec[P.first] = Vec[P.first].replaceAt(P.second, "O");
    for (let i = 0; i < 4; ++i) {
      let x = P.first + dx[i];
      let y = P.second + dy[i];
      if (is_valid(x, y) && Vec[x][y] == "X") {
        Que.enqueue(new Node(x, y));
      }
    }
  }
}

module.exports = {
  black: function (A) {
    let Vec = [];
    Vec = A;
    N = Vec.length;
    M = Vec[0].length;
    let cnt = 0;
    for (let i = 0; i < N; ++i) {
      for (let j = 0; j < M; ++j) {
        if (Vec[i][j] == "X") {
          cnt++;
          bfs(i, j, Vec);
        }
      }
    }
    return cnt;
  },
};