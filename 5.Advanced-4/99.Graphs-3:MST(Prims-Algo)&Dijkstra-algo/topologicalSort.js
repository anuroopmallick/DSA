// Problem Description

// Given an directed acyclic graph having A nodes. A matrix B of size M x 2 is given which represents the M edges such that there is a edge directed from node B[i][0] to node B[i][1].

// Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge uv, vertex u comes before v in the ordering. Topological Sorting for a graph is not possible if the graph is not a DAG.

// Return the topological ordering of the graph and if it doesn't exist then return an empty array.

// If there is a solution return the correct ordering. If there are multiple solutions print the lexographically smallest one.

// Ordering (a, b, c) is said to be lexographically smaller than ordering (e, f, g) if a < e or if(a==e) then b < f and so on.

// NOTE:

// There are no self-loops in the graph.
// The graph may or may not be connected.
// Nodes are numbered from 1 to A.
// Your solution will run on multiple test cases. If you are using global variables make sure to clear them.


// Problem Constraints

// 2 <= A <= 104

// 1 <= M <= min(100000,A*(A-1))

// 1 <= B[i][0], B[i][1] <= A



// Input Format

// The first argument given is an integer A representing the number of nodes in the graph.

// The second argument given a matrix B of size M x 2 which represents the M edges such that there is a edge directed from node B[i][0] to node B[i][1].



// Output Format

// Return a one-dimensional array denoting the topological ordering of the graph and it it doesn't exist then return empty array.



// Example Input

// Input 1:

//  A = 6
//  B = [  [6, 3] 
//         [6, 1] 
//         [5, 1] 
//         [5, 2] 
//         [3, 4] 
//         [4, 2] ]
// Input 2:

//  A = 3
//  B = [  [1, 2]
//         [2, 3] 
//         [3, 1] ]


// Example Output

// Output 1:

//  [5, 6, 1, 3, 4, 2]
// Output 2:

//  []

let adj;
let inp;

class PriorityQueue {
  constructor(fct) {
    this.heap = [];
    this.fct = fct;
  }
  top() {
    if (this.heap.length == 0) return undefined;
    return this.heap[0] * this.fct;
  }
  push(node) {
    this.heap.push(node * this.fct);
    let id = this.heap.length - 1;
    let par = Math.floor((id - 1) / 2);

    while (id > 0 && this.heap[id] < this.heap[par]) {
      [this.heap[id], this.heap[par]] = [this.heap[par], this.heap[id]];
      id = Math.floor((id - 1) / 2);
      par = Math.floor((id - 1) / 2);
    }
  }
  pop() {
    let ret = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.recurDown(0);
    return ret * this.fct;
  }
  recurDown(node) {
    let l = node * 2 + 1;
    let r = node * 2 + 2;

    let cur = node;
    if (l < this.heap.length && this.heap[cur] > this.heap[l]) cur = l;
    if (r < this.heap.length && this.heap[cur] > this.heap[r]) cur = r;
    if (cur != node) {
      [this.heap[node], this.heap[cur]] = [this.heap[cur], this.heap[node]];
      this.recurDown(cur);
    }
  }
  size() {
    return this.heap.length;
  }
  empty() {
    return this.heap.length == 0;
  }
}

module.exports = {
  solve: function (A, B) {
    adj = new Map();
    for (let i = 1; i <= A; i++) {
      adj.set(i, []);
    }
    inp = new Array(A + 1).fill(0);
    for (let i = 0; i < B.length; i++) {
      let a = B[i][0];
      let b = B[i][1];
      adj.get(a).push(b);
      inp[b]++;
    }

    let pq = new PriorityQueue(1);
    for (let i = 1; i <= A; i++) {
      if (inp[i] == 0) pq.push(i);
    }
    let ans = [];
    while (!pq.empty()) {
      let temp = pq.pop();
      ans.push(temp);
      for (let i = 0; i < adj.get(temp).length; i++) {
        inp[adj.get(temp)[i]]--;
        if (inp[adj.get(temp)[i]] == 0) pq.push(adj.get(temp)[i]);
      }
    }
    if (ans.length != A) ans = [];
    return ans;
  },
};
