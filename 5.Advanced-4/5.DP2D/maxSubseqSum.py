# Problem Description

# You are given an array A of N integers.

# Now you are required to determine the maximum sum possible by taking a subsequence 
# such that there are no two consecutive elements taken from array A in the sum.

# Problem Constraints
# 1 ≤ N ≤ 105
# 1 ≤ A[i] ≤ 2 * 104

# Input Format
# First argument is the array A of length N.

# Output Format
# Return an integer equal to the maximum subsequence sum possible according to the problem.

# Example Input
# Input 1:
# A = [1, 2, 3, 4, 5]
# Input 2:
# A = [10, 3, 2, 10]

# Example Output
# Output 1:
# 9
# Output 2:
# 20

# Example Explanation
# Explanation 1:
# We can choose elements at indices 0, 2 and 4, 
# with elements 1, 3 and 5 respectively. 
# These elements add up to 9, which is the maximum possible subsequence sum.

# Explanation 2:
# We can choose elements at indices 0 and 3, which add up to 20, which is the maximum possible subsequence sum.

class Solution:
    # @param A : list of integers
    # @return an integer
    def maxSubsequenceSum(self, A):

        n = len(A) 
        dp = [0] * (n + 2)

        for i in range(n-1, -1, -1):
            dp[i] = max(A[i] + dp[i+2], dp[i+1])

        return dp[0]


        dp = [float("-inf")] * n 

        def solve(array, index, n, dp):
            if index >= n:
                return 0

            if dp[index] != float("-inf"):
                return dp[index]

            pick = solve(array, index + 2, n , dp) + array[index]

            notPick = solve(array, index + 1, n, dp)

            return max(pick, notPick)


        ans = solve(A, 0, n, dp)

        return ans

