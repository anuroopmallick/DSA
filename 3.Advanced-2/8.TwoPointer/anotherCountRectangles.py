# Problem Description

# You are given a sorted array of distinct positive integers A and a positive integer B. Count the number of rectangles with distinct configurations that can be formed by picking a length and a breadth from A such that the area is strictly less than B. Ordered pairs are distinct: a rectangle of size 2 x 3 is different from one of size 3 x 2.

# Return the count modulo 109 + 7.


# Problem Constraints

# 1 <= |A| <= 105
# 1 <= A[i] <= 109, all values are distinct and A is sorted in ascending order
# 1 <= B <= 109


# Input Format

# The first argument is the sorted integer array A.
# The second argument is the integer B.


# Output Format

# Return a single integer, the count modulo 109 + 7.


# Example Input

# Input 1:
# A = [1, 2]
# B = 5
# Input 2:
# A = [1, 2]
# B = 1


# Example Output

# Output 1:
# 4
# Output 2:
# 0


# Example Explanation

# Explanation 1:
# The valid ordered pairs (length, breadth) are:
# (1, 1) area 1, (1, 2) area 2, (2, 1) area 2, (2, 2) area 4.
# All four are strictly below 5, so the count is 4.
# Explanation 2:
# The smallest possible area is 1 * 1 = 1, which is not strictly less
# than 1, so no ordered pair qualifies. Count = 0.


class Solution:
    def solve(self, A, B):
        MOD = 10**9 + 7
        n = len(A)
        ans = 0
        l = 0
        r = n - 1
        while l < n and r >= 0:
            if A[l] * A[r] < B:
                ans = (ans + r + 1) % MOD
                l += 1
            else:
                r -= 1
        return ans