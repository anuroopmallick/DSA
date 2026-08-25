// Problem Description

// You are given an undirected graph with A nodes, numbered 0 to A - 1. The edges are given as a 2D array B of size |B| x 2, where B[i] = [u, v] means there is an edge between node u and node v.

// The graph is called bipartite if you can split its nodes into two groups so that every edge of the graph joins a node of one group to a node of the other. No edge may have both of its endpoints in the same group. Either group is allowed to be empty.

// Decide whether the given graph is bipartite.

// A few things to keep in mind:
// The graph has no self-loops, so B[i][0] is never equal to B[i][1].
// No pair of nodes is joined by more than one edge.
// The graph need not be connected, so you must account for every component.


// Problem Constraints

// 1 <= A <= 105
// 1 <= |B| <= min(A * (A - 1) / 2, 2 * 105)
// B[i] has length 2 for every i
// 0 <= B[i][0], B[i][1] < A
// B[i][0] != B[i][1]
// No unordered pair {u, v} appears more than once in B


// Input Format

// The first argument is the integer A, the number of nodes.
// The second argument is the 2D integer array B of edges.


// Output Format

// Return the integer 1 if the graph is bipartite, and 0 otherwise.


// Example Input

// Input 1:
// A = 2
// B = [
//     [0, 1]
// ]
// Input 2:
// A = 3
// B = [
//     [0, 1],
//     [0, 2],
//     [1, 2]
// ]


// Example Output

// Output 1:
// 1
// Output 2:
// 0


// Example Explanation

// Explanation 1:

// Put 0 and 1 into 2 different subsets.
// Explanation 2:

// It is impossible to break the graph down to make two different subsets for bipartite matching

module.exports = {
    solve: function (A, B) {
        const adj = Array.from({length: A}, () => []);
        for (const e of B) {
            adj[e[0]].push(e[1]);
            adj[e[1]].push(e[0]);
        }

        const color = new Int8Array(A).fill(-1);
        const q = new Int32Array(A);
        for (let s = 0; s < A; s++) {
            if (color[s] !== -1) continue;
            color[s] = 0;
            let head = 0, tail = 0;
            q[tail++] = s;
            while (head < tail) {
                const u = q[head++];
                const cu = color[u];
                for (const v of adj[u]) {
                    if (color[v] === -1) {
                        color[v] = cu ^ 1;
                        q[tail++] = v;
                    } else if (color[v] === cu) {
                        return 0;
                    }
                }
            }
        }
        return 1;
    }
};