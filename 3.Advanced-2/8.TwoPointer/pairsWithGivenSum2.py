# Problem Description

# Given a sorted array of integers (not necessarily distinct) A and an integer B, find and return how many pair of integers ( A[i], A[j] ) such that i != j have sum equal to B.

# Since the number of such pairs can be very large, return number of such pairs modulo (109 + 7).



# Problem Constraints

# 1 <= |A| <= 100000

# 1 <= A[i] <= 10^9

# 1 <= B <= 10^9



# Input Format

# The first argument given is the integer array A.

# The second argument given is integer B.



# Output Format

# Return the number of pairs for which sum is equal to B modulo (10^9+7).



# Example Input

# Input 1:

# A = [1, 1, 1]
# B = 2
# Input 2:

# A = [1, 5, 7, 10]
# B = 8


# Example Output

# Output 1:

#  3
# Output 2:

#  1


# Example Explanation

# Explanation 1:

#  The pairs of A[i] and A[j] which sum up to 2 are (0, 1), (0, 2) and (1, 2).
#  There are 3 pairs.
# Explanation 2:

#  There is only one pair, such that i = 0, and j = 2 sums up to 8.


class Solution:
    # @param A : list of integers
    # @param B : integer
    # @return an integer
    def solve(self, A, B):
        n = len(A)
        count = 0

        i = 0 
        j = n-1

        while i < j:
            if A[i] + A[j] == B:
                x = A[i] 
                counti = 0
                while i < j and A[i] == x:
                    counti += 1
                    i += 1

                y = A[j]
                countj = 0
                while i <= j and A[j] == y:
                    countj += 1
                    j -= 1
                
                if x == y:
                    temp = counti + countj 
                    count += (temp * (temp - 1)) // 2
                else:
                    count += (counti * countj)


            elif A[i] + A[j] > B:
                j -= 1
            elif A[i] + A[j] < B:
                i += 1
        
        return count % (10 ** 9 + 7)
