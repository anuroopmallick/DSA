// 

class Solution:
	# @param A : list of integers
	# @return an integer
	def maxArea(self, A):

        n = len(A)
        i = 0
        j = n-1 
        ans = 0

        while i < j:
            ans = max(ans, (j - i) * (min(A[i], A[j])))
            if A[i] <= A[j]:
                i += 1
            else:
                j -= 1

        return ans


        

        
