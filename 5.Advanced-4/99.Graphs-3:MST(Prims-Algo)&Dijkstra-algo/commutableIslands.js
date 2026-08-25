// Problem Description

// There are A islands and there are M bridges connecting them. Each bridge has some cost attached to it.

// We need to find bridges with minimal cost such that all islands are connected.

// It is guaranteed that input data will contain at least one possible scenario in which all islands are connected with each other.



// Problem Constraints

// 1 <= A, M <= 6*104

// 1 <= B[i][0], B[i][1] <= A

// 1 <= B[i][2] <= 103



// Input Format

// The first argument contains an integer, A, representing the number of islands.

// The second argument contains an 2-d integer matrix, B, of size M x 3 where Island B[i][0] and B[i][1] are connected using a bridge of cost B[i][2].



// Output Format

// Return an integer representing the minimal cost required.



// Example Input

// Input 1:

//  A = 4
//  B = [  [1, 2, 1]
//         [2, 3, 4]
//         [1, 4, 3]
//         [4, 3, 2]
//         [1, 3, 10]  ]
// Input 2:

//  A = 4
//  B = [  [1, 2, 1]
//         [2, 3, 2]
//         [3, 4, 4]
//         [1, 4, 3]   ]


// Example Output

// Output 1:

//  6
// Output 2:

//  6


// Example Explanation

// Explanation 1:

//  We can choose bridges (1, 2, 1), (1, 4, 3) and (4, 3, 2), where the total cost incurred will be (1 + 3 + 2) = 6.
// Explanation 2:

//  We can choose bridges (1, 2, 1), (2, 3, 2) and (1, 4, 3), where the total cost incurred will be (1 + 2 + 3) = 6.

class MinHeap {
    constructor() { this.h = []; }
    push(item) {
        this.h.push(item);
        let i = this.h.length - 1;
        while (i > 0) {
            let p = (i - 1) >> 1;
            if (this.h[p][0] > this.h[i][0]) {
                let t = this.h[p]; this.h[p] = this.h[i]; this.h[i] = t;
                i = p;
            } else break;
        }
    }
    pop() {
        let top = this.h[0];
        let last = this.h.pop();
        if (this.h.length > 0) {
            this.h[0] = last;
            let i = 0, n = this.h.length;
            while (true) {
                let l = 2 * i + 1, r = 2 * i + 2, s = i;
                if (l < n && this.h[l][0] < this.h[s][0]) s = l;
                if (r < n && this.h[r][0] < this.h[s][0]) s = r;
                if (s === i) break;
                let t = this.h[i]; this.h[i] = this.h[s]; this.h[s] = t;
                i = s;
            }
        }
        return top;
    }
    empty() { return this.h.length === 0; }
}

module.exports = {
    //param A : integer
    //param B : array of array of integers
    //return an integer
    solve : function(A, B) {
        let adj = [];
        for (let i = 0; i <= A; i++) adj.push([]);
        for (let i = 0; i < B.length; i++) {
            let u = B[i][0], v = B[i][1], w = B[i][2];
            adj[u].push([v, w]);
            adj[v].push([u, w]);
        }

        let heap = new MinHeap();
        heap.push([0, 1]);
        let visited = new Array(A + 1).fill(false);
        let totalCost = 0;

        while (!heap.empty()) {
            let top = heap.pop();
            let weight = top[0], v = top[1];
            if (visited[v]) continue;
            visited[v] = true;
            totalCost += weight;
            for (let j = 0; j < adj[v].length; j++) {
                let u = adj[v][j][0], w = adj[v][j][1];
                if (!visited[u]) heap.push([w, u]);
            }
        }
        return totalCost;
    }
};