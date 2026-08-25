// Problem Description

// Given any source point, (C, D) and destination point, (E, F) on a chess board of size A x B, we need to find whether Knight can move to the destination or not.


// The above figure details the movements for a knight ( 8 possibilities ).

// If yes, then what would be the minimum number of steps for the knight to move to the said point. If knight can not move from the source point to the destination point, then return -1.

// NOTE: A knight cannot go out of the board.



// Problem Constraints

// 1 <= A, B <= 500



// Input Format

// The first argument of input contains an integer A.
// The second argument of input contains an integer B.
// The third argument of input contains an integer C.
// The fourth argument of input contains an integer D.
// The fifth argument of input contains an integer E.
// The sixth argument of input contains an integer F.



// Output Format

// If it is possible to reach the destination point, return the minimum number of moves.
// Else return -1.



// Example Input

// Input 1:

//  A = 8
//  B = 8
//  C = 1
//  D = 1
//  E = 8
//  F = 8
// Input 2:

//  A = 2
//  B = 4
//  C = 2
//  D = 1
//  E = 4
//  F = 4


// Example Output

// Output 1:

//  6
// Output 2:

//  -1


// Example Explanation

// Explanation 1:

//  The size of the chessboard is 8x8, the knight is initially at (1, 1) and the knight wants to reach position (8, 8).
//  The minimum number of moves required for this is 6.
// Explanation 2:

//  It is not possible to move knight to position (4, 4) from (2, 1)


let dx = [2, 2, -2, -2, 1, 1, -1, -1];
let dy = [-1, 1, 1, -1, 2, -2, 2, -2];
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
  constructor(x, y, dis) {
    this.x = x;
    this.y = y;
    this.dis = dis;
  }
}

function valid(x, y, N, M) {
  if (x <= 0 || y <= 0 || x > N || y > M) return false;
  return true;
}

function bfs(p1, p2, p3) {
  let N = p3[0];
  let M = p3[1];
  let Que = new Queue();
  let Vis = new Map();

  let nw = new Node(p1[0], p1[1], 0);
  Que.enqueue(nw);

  while (!Que.isEmpty()) {
    let temp = Que.dequeue();

    if (temp.x == p2[0] && temp.y == p2[1]) return temp.dis;
    let x = temp.x;
    let y = temp.y;
    let dis = temp.dis + 1;

    if (Vis.has(x * M + y)) continue;
    Vis.set(x * M + y, true);

    for (let i = 0; i < 8; ++i) {
      let x1 = x + dx[i];
      let y1 = y + dy[i];
      let psh = new Node(x1, y1, dis);
      if (valid(x1, y1, N, M)) Que.enqueue(psh);
    }
  }
  return -1;
}

module.exports = {
  knight: function (N, M, x1, y1, x2, y2) {
    let p1 = [x1, y1],
      p2 = [x2, y2],
      p3 = [N, M];

    let ans = bfs(p1, p2, p3);
    return ans;
  },
};
