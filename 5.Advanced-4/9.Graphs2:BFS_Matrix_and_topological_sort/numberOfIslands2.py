// Problem Description

// Given a matrix of integers A of size N x M consisting of 0 and 1. A group of connected 1's forms an island. From a cell (i, j) such that A[i][j] = 1 you can visit any cell that shares a side with (i, j) and value in that cell is 1.

// More formally, from any cell (i, j) if A[i][j] = 1 you can visit:

// (i-1, j) if (i-1, j) is inside the matrix and A[i-1][j] = 1.

// (i, j-1) if (i, j-1) is inside the matrix and A[i][j-1] = 1.

// (i+1, j) if (i+1, j) is inside the matrix and A[i+1][j] = 1.

// (i, j+1) if (i, j+1) is inside the matrix and A[i][j+1] = 1.

// Return the number of islands.

// Note:

// Rows are numbered from top to bottom and columns are numbered from left to right.
// Your solution will run on multiple test cases. If you are using global variables, make sure to clear them.


// Problem Constraints

// 1 <= N, M <= 100
// 0 <= A[i] <= 1


// Input Format

// The only argument given is the integer matrix A.


// Output Format

// Return the number of islands.


// Example Input

// Input 1:
// A = [ [0, 1, 0]
//       [0, 0, 1]
//       [1, 0, 0] ]
// Input 2:
// A = [ [1, 1, 0, 0, 0]
//       [1, 1, 0, 0, 0]
//       [0, 0, 0, 0, 0]
//       [0, 0, 0, 1, 1] ]


// Example Output

// Output 1:
// 3
// Output 2:
// 2


// Example Explanation

// Explanation 1:
// There are 3 islands in the matrix
// Explanation 2:
// There are 2 islands in the matrix


class Solution:
    dir = [[0, 1], [1, 0], [-1, 0], [0, -1]]
    tc = 0

    def check(self, i, j, n, m, A, visited):
        return i >= 0 and i < n and j >= 0 and j < m and A[i][j] == 1 and visited[i][j] != self.tc

    def dfs(self, i, j, n, m, A, visited):
        visited[i][j] = self.tc
        for k in range(4):
            di = i + self.dir[k][0]
            dj = j + self.dir[k][1]
            if self.check(di, dj, n, m, A, visited):
                self.dfs(di, dj, n, m, A, visited)

    def solve(self, A):
        n = len(A)
        m = len(A[0])
        self.tc += 1
        visited = [[0] * m for _ in range(n)]
        number_of_islands = 0
        for i in range(n):
            for j in range(m):
                if A[i][j] == 1 and visited[i][j] != self.tc:
                    self.dfs(i, j, n, m, A, visited)
                    number_of_islands += 1
        return number_of_islands
