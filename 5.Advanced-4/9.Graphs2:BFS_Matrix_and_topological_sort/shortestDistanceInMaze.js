// Problem Description

// Given a matrix of integers A of size N x M describing a maze. The maze consists of empty locations and walls.

// 1 represents a wall in a matrix and 0 represents an empty location in a wall.

// There is a ball trapped in a maze. The ball can go through empty spaces by rolling up, down, left or right, but it won't stop rolling until hitting a wall (maze boundary is also considered as a wall). When the ball stops, it could choose the next direction.

// Given two array of integers of size B and C of size 2 denoting the starting and destination position of the ball.

// Find the shortest distance for the ball to stop at the destination. The distance is defined by the number of empty spaces traveled by the ball from the starting position (excluded) to the destination (included). If the ball cannot stop at the destination, return -1.



// Problem Constraints

// 2 <= N, M <= 100

// 0 <= A[i] <= 1

// 0 <= B[i][0], C[i][0] < N

// 0 <= B[i][1], C[i][1] < M



// Input Format

// The first argument given is the integer matrix A.

// The second argument given is an array of integer B.

// The third argument if an array of integer C.



// Output Format

// Return a single integer, the minimum distance required to reach destination



// Example Input

// Input 1:


// A = [ [0, 0], 
//       [0, 0] ]
// B = [0, 0]
// C = [0, 1]


// Input 2:

// A = [ [0, 1], 
//       [1, 0] ]
// B = [0, 0]
// C = [1, 1]












// Example Output

// Output 1:


//  1


// Output 2:

//  -1

// Example Explanation

// Explanation 1:

//  Go directly from start to destination in distance 1.
// Explanation 2:

//  It is impossible to reach the destination from (0, 0) to (1, 1) as there are walls at (1, 0) and (0, 1)

const top = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;
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
const maxn = 100009;
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

function inside(x, y, n, m) {
    return (x >= 0 && x <= n - 1 && y >= 0 && y <= m - 1);
}
module.exports = {
    //param A : array of array of integers
    //param B : array of integers
    //param C : array of integers
    //return an integer
    solve: function (maze, start, destination) {
        let n = maze.length;
        let m = maze[0].length;
        let sx = start[0];
        let sy = start[1];
        let ex = destination[0];
        let ey = destination[1];
        let v = new Array(n);
        for (let i = 0; i < n; i++) {
            v[i] = new Array(m).fill(Infinity);
        }
        let pq = new PriorityQueue();
        let i;
        let d, d1;
        let x, y;
        let x1, y1;
        let x2, y2;
        pq.push([0, sx, sy]);

        while (pq.size() != 0 && v[ex][ey] == Infinity) {
            let temp = pq.pop();
            x = temp[1];
            y = temp[2];
            d = temp[0];
            if (v[x][y] != Infinity) {
                continue;
            } else {
                v[x][y] = d;
            }

            for (i = 0; i < 4; ++i) {
                x1 = x;
                y1 = y;
                d1 = 0;
                while (true) {
                    x2 = x1 + dx[i];
                    y2 = y1 + dy[i];
                    if (inside(x2, y2, n, m) == true && maze[x2][y2] == 0) {
                        x1 = x2;
                        y1 = y2;
                        ++d1;
                    } else {
                        break;
                    }
                }
                if (d1 > 0 && v[x1][y1] == Infinity) {
                    pq.push([d + d1, x1, y1]);
                }
            }
        }
        let res = -1;
        if (v[ex][ey] != Infinity)
            res = v[ex][ey];
        return res;
    }
};

