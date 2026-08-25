// Problem Description

// Given a weighted undirected graph having A nodes and M weighted edges, and a source node C.

// You have to find an integer array D of size A such that:

// D[i]: Shortest distance from the C node to node i.
// If node i is not reachable from C then -1.
// Note:

// There are no self-loops in the graph.
// There are no multiple edges between two pairs of vertices.
// The graph may or may not be connected.
// Nodes are numbered from 0 to A-1.
// Your solution will run on multiple test cases. If you are using global variables, make sure to clear them.



// Problem Constraints

// 1 <= A <= 1e5

// 0 <= B[i][0],B[i][1] < A

// 0 <= B[i][2] <= 1e3

// 0 <= C < A



// Input Format

// The first argument is an integer A, representing the number of nodes in the graph.
// The second argument is a matrix B of size M x 3, where each row represents an edge in the graph. The three columns of each row denote the source node B[i][0], the destination node B[i][1], and the weight of the edge B[i][2].
// The third argument is an integer C, representing the source node for which the shortest distance to all other nodes needs to be found.


// Output Format

// Return the integer array D.



// Example Input

// Input 1:

// A = 6
// B = [   [0, 4, 9]
//         [3, 4, 6] 
//         [1, 2, 1] 
//         [2, 5, 1] 
//         [2, 4, 5] 
//         [0, 3, 7] 
//         [0, 1, 1] 
//         [4, 5, 7] 
//         [0, 5, 1] ] 
// C = 4
// Input 2:

// A = 5
// B = [   [0, 3, 4]
//         [2, 3, 3] 
//         [0, 1, 9] 
//         [3, 4, 10] 
//         [1, 3, 8]  ] 
// C = 4


// Example Output

// Output 1:

// D = [7, 6, 5, 6, 0, 6]
// Output 2:

// D = [14, 18, 13, 10, 0]


// Example Explanation

// Explanation 1:

//  All Paths can be considered from the node C to get shortest path
// Explanation 2:

//  All Paths can be considered from the node C to get shortest path

const top = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;
let g = new Array(100005);
let vis = new Array(100005);
class PriorityQueue {
    constructor(comparator = (a, b) => a[0] < b[0]) {
        this._heap = [];
        this._comparator = comparator;
    }
    size() {
        return this._heap.length;
    }
    isEmpty() {
        return this.size() == 0;
    }
    peek() {
        return this._heap[top];
    }
    push(...values) {
        values.forEach(value => {
            this._heap.push(value);
            this._siftUp();
        });
        return this.size();
    }
    pop() {
        const poppedValue = this.peek();
        const bottom = this.size() - 1;
        if (bottom > top) {
            this._swap(top, bottom);
        }
        this._heap.pop();
        this._siftDown();
        return poppedValue;
    }
    replace(value) {
        const replacedValue = this.peek();
        this._heap[top] = value;
        this._siftDown();
        return replacedValue;
    }
    _greater(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }
    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }
    _siftUp() {
        let node = this.size() - 1;
        while (node > top && this._greater(node, parent(node))) {
            this._swap(node, parent(node));
            node = parent(node);
        }
    }
    _siftDown() {
        let node = top;
        while (
            (left(node) < this.size() && this._greater(left(node), node)) ||
            (right(node) < this.size() && this._greater(right(node), node))
        ) {
            let maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
            this._swap(node, maxChild);
            node = maxChild;
        }
    }
}

function clean(n) {
    for (let i = 0; i <= n; ++i) {
        g[i] = [];
        vis[i] = 0;
    }
}

function make_graph(edges) {
    for (let i = 0; i < edges.length; i++) {
        let it = edges[i];
        let x = it[0];
        let y = it[1];
        let w = it[2];
        g[x].push([w, y]);
        g[y].push([w, x]);
    }
}
module.exports = {
    //param A : integer
    //param B : array of array of integers
    //param C : integer
    //return a array of integers
    solve: function (n, edges, source) {
        clean(n);
        make_graph(edges);
        let distance = new Array(n).fill(Infinity);
        let q = new PriorityQueue();
        distance[source] = 0;
        q.push([0, source]);
        while (q.size() > 0) {
            let p = q.pop();
            let x = p[1];
            if (vis[x] == 1)
                continue;
            vis[x] = 1;
            for (let i = 0; i < g[x].length; ++i) {
                let y = g[x][i][1];
                let w = g[x][i][0];
                if (distance[x] + w < distance[y]) {
                    distance[y] = distance[x] + w;
                    q.push([distance[y], y]);
                }
            }
        }
        for (let i = 0; i < n; ++i) {
            if (distance[i] == Infinity)
                distance[i] = -1;
        }
        return distance;
    }
};
