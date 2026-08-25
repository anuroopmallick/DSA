// Problem Description

// Given a Tree of A nodes having A-1 edges. Each node is numbered from 1 to A where 1 is the root of the tree.

// You are given Q queries. In each query, you will be given two integers L and X. Find the value of such node which lies at level L mod (MaxDepth + 1) and has value greater than or equal to X.

// Answer to the query is the smallest possible value or -1, if all the values at the required level are smaller than X.

// NOTE:

// Level and Depth of the root is considered as 0.
// It is guaranteed that each edge will be connecting exactly two different nodes of the tree.
// Please read the input format for more clarification.


// Problem Constraints

// 2 <= A, Q(size of array E and F) <= 105

// 1 <= B[i], C[i] <= A

// 1 <= D[i], E[i], F[i] <= 106



// Input Format

// The first argument is an integer A denoting the number of nodes.

// The second and third arguments are the integer arrays B and C where for each i (0 <= i < A-1), B[i] and C[i] are the nodes connected by an edge.

// The fourth argument is an integer array D, where D[i] denotes the value of the (i+1)th node

// The fifth and sixth arguments are the integer arrays E and F where for each i (0 <= i < Q), E[i] denotes L and F[i] denotes X for ith query.



// Output Format

// Return an array of integers where the ith element denotes the answer to ith query.



// Example Input

// Input 1:

//  A = 5
//  B = [1, 4, 3, 1]
//  C = [5, 2, 4, 4]
//  D = [7, 38, 27, 37, 1]
//  E = [1, 1, 2]
//  F = [32, 18, 26]
// Input 2:

//  A = 3
//  B = [1, 2]
//  C = [3, 1]
//  D = [7, 15, 27]
//  E = [1, 10, 1]
//  F = [29, 6, 26]


// Example Output

// Output 1:

//  [37, 37, 27]
// Output 2:

//  [-1, 7, 27]


// Example Explanation

// Explanation 1:

//       1[7]
//      /    \
//    5[1]  4[37]
//         /    \
//        2[38]  3[27]

//  Query 1: 
//     L = 1, X = 32
//     Nodes for level 1 are 5, 4
//     Value of Node 5 = 1 < 32
//     Value of Node 4 = 37 >= 32
//     Ans = 37
// Explanation 2:

//       1[7]
//      /    \
//    2[15]  3[27]

//  Query 1: 
//     L = 1, X = 6
//     Nodes for level 1 are 2, 3 having value 15 and 27 respectively.
//     Answer = -1 (Since no node is greater or equal to 29).
//  Query 1: 
//     L = 10 % 2 = 0, X = 6
//     Nodes for level 0 is 1 having value 7.
//     Answer = 7.     

const maxn = 100009;
let n = 0;
let q = 0;
let mx = 0;
let val = new Array(maxn);
let adj = new Array(maxn);
let lvl = new Array(maxn);

function graph() {
    for (let i = 0; i < maxn; i++) {
        adj[i] = [];
        lvl[i] = [];
    }
    mx = 0;
}

function dfs(u, v, d) {
    mx = Math.max(mx, d);
    lvl[d].push(val[u]);
    for (let j = 0; j < adj[u].length; j++) {
        let i = adj[u][j];
        if (i == v) continue;
        dfs(i, u, d + 1);
    }
}

function lowerBound(a, low, high, element) {
    while (low < high) {
        let middle = low + ((high - low) >> 1);
        if (element > a[middle]) {
            low = middle + 1;
        } else {
            high = middle;
        }
    }
    return low;
}
module.exports = {
    //param A : integer
    //param B : array of integers
    //param C : array of integers
    //param D : array of integers
    //param E : array of integers
    //param F : array of integers
    //return a array of integers
    solve: function (A, B, C, D, E, F) {
        graph();
        n = A;
        q = F.length;
        for (let i = 0; i < n; i++)
            val[i + 1] = D[i];
        for (let i = 0; i < n - 1; i++) {
            adj[B[i]].push(C[i]);
            adj[C[i]].push(B[i]);
        }
        mx = 0;
        dfs(1, 1, 0);
        for (let i = 0; i < maxn; i++) {
            lvl[i].sort(function (a, b) {
                return a - b
            });
        }
        let res = new Array(q);
        for (let i = 0; i < q; i++) {
            let l = E[i];
            let x = F[i];
            l %= (mx + 1);
            let it = lowerBound(lvl[l], 0, lvl[l].length, x);
            if (it == lvl[l].length)
                res[i] = -1;
            else
                res[i] = lvl[l][it];
        }
        return res;
    }
};
