# Problem Description

# Given a matrix of integers A of size N x M consisting of 0 and 1. A group of connected 1's forms an island. From a cell (i, j) such that A[i][j] = 1 you can visit any cell that shares a corner with (i, j) and value in that cell is 1.

# More formally, from any cell (i, j) if A[i][j] = 1 you can visit:

# (i-1, j) if (i-1, j) is inside the matrix and A[i-1][j] = 1.
# (i, j-1) if (i, j-1) is inside the matrix and A[i][j-1] = 1.
# (i+1, j) if (i+1, j) is inside the matrix and A[i+1][j] = 1.
# (i, j+1) if (i, j+1) is inside the matrix and A[i][j+1] = 1.
# (i-1, j-1) if (i-1, j-1) is inside the matrix and A[i-1][j-1] = 1.
# (i+1, j+1) if (i+1, j+1) is inside the matrix and A[i+1][j+1] = 1.
# (i-1, j+1) if (i-1, j+1) is inside the matrix and A[i-1][j+1] = 1.
# (i+1, j-1) if (i+1, j-1) is inside the matrix and A[i+1][j-1] = 1.
# Return the number of islands.

# NOTE: Rows are numbered from top to bottom and columns are numbered from left to right.



# Problem Constraints

# 1 <= N, M <= 100

# 0 <= A[i] <= 1



# Input Format

# The only argument given is the integer matrix A.



# Output Format

# Return the number of islands.



# Example Input

# Input 1:

#  A = [ 
#        [0, 1, 0]
#        [0, 0, 1]
#        [1, 0, 0]
#      ]
# Input 2:

#  A = [   
#        [1, 1, 0, 0, 0]
#        [0, 1, 0, 0, 0]
#        [1, 0, 0, 1, 1]
#        [0, 0, 0, 0, 0]
#        [1, 0, 1, 0, 1]    
#      ]


# Example Output

# Output 1:

#  2
# Output 2:

#  5


# Example Explanation

# Explanation 1:

#  The 1's at position A[0][1] and A[1][2] forms one island.
#  Other is formed by A[2][0].
# Explanation 2:

#  There 5 island in total.

import sys
sys.setrecursionlimit(10 ** 6)

class Solution:
    # @param A : list of list of integers
    # @return an integer
    def solve(self, A):

        n = len(A)
        m = len(A[0])

        ans = 0

        visited = [[False for _ in range(m)] for _ in range(n)]

        def dfs(graph, i, j, visited):
            visited[i][j] = True

            if i-1 >= 0 and A[i-1][j] == 1 and visited[i-1][j] == False:
                dfs(graph, i-1, j, visited)

            if j-1 >= 0 and A[i][j-1] == 1 and visited[i][j-1] == False:
                dfs(graph, i, j-1, visited)

            if i+1 < n and A[i+1][j] == 1 and visited[i+1][j] == False:
                dfs(graph, i+1, j, visited)

            if j+1 < m and A[i][j+1] == 1 and visited[i][j+1] == False:
                dfs(graph, i, j+1, visited)

            if i-1 >= 0 and j-1 >= 0 and A[i-1][j-1] == 1 and visited[i-1][j-1] == False:
                dfs(graph, i-1, j-1, visited)

            if i+1 < n and j+1 < m and A[i+1][j+1] == 1 and visited[i+1][j+1] == False:
                dfs(graph, i+1, j+1, visited)

            if i-1 >= 0 and j+1 < m and A[i-1][j+1] == 1 and visited[i-1][j+1] == False:
                dfs(graph, i-1, j+1, visited)

            if i+1 < n and j-1 >= 0 and A[i+1][j-1] == 1 and visited[i+1][j-1] == False:
                dfs(graph, i+1, j-1, visited)

        for i in range(n):
            for j in range(m):
                if visited[i][j] is False and A[i][j] == 1:
                    ans += 1
                    dfs(A, i, j, visited)

        return ans


