// Problem Description

// Given an integer array B of size N.

// You need to find the Ath largest element in the subarray [1 to i], where i varies from 1 to N. In other words, find the Ath largest element in the sub-arrays [1 : 1], [1 : 2], [1 : 3], ...., [1 : N].

// NOTE: If any subarray [1 : i] has less than A elements, then the output should be -1 at the ith index.

// Problem Constraints

// 1 <= N <= 100000
// 1 <= A <= N
// 1 <= B[i] <= INT_MAX

// Input Format

// The first argument is an integer A.
// The second argument is an integer array B of size N.

// Output Format

// Return an integer array C, where C[i] (1 <= i <= N) will have the Ath largest element in the subarray [1 : i].

// Example Input
// Input 1:

//  A = 4  
//  B = [1 2 3 4 5 6] 

// Input 2:

//  A = 2
//  B = [15, 20, 99, 1]

// Example Output
// Output 1:
//  [-1, -1, -1, 1, 2, 3]

// Output 2:
//  [-1, 15, 20, 20]

// Example Explanation
// Explanation 1:
//  for i <= 3 output should be -1.
//  for i = 4, Subarray [1:4] has 4 elements 1, 2, 3 and 4. So, 4th maximum element is 1.
//  for i = 5, Subarray [1:5] has 5 elements 1, 2, 3, 4 and 5. So, 4th maximum element is 2.
//  for i = 6, Subarray [1:6] has 6 elements 1, 2, 3, 4, 5 and 6. So, 4th maximum element is 3.
//  So, output array is [-1, -1, -1, 1, 2, 3].
 
// Explanation 2:
//  for i <= 1 output should be -1.
//  for i = 2 , Subarray [1:2] has 2 elements 15 and 20. So, 2th maximum element is 15.
//  for i = 3 , Subarray [1:3] has 3 elements 15, 20 and 99. So, 2th maximum element is 20.
//  for i = 4 , Subarray [1:4] has 4 elements 15, 20, 99 and 1. So, 2th maximum element is 20.
//  So, output array is [-1, 15, 20, 20].

module.exports = { 
 //param A : integer
 //param B : array of integers
 //return a array of integers
	solve : function(A, B){
        class MinHeap {
            constructor(arr = []) {
                this.heap = [...arr]
        
                let i = Math.floor(arr.length/2) - 1
                
                for(i ; i >= 0 ; i--) {
                    this.downheapify(i)
                }
                
            }
        
            insert(val) {
                this.heap.push(val)
                this.upHeapify(this.heap.length - 1)
            }
        
            extract() {
                this.swap(this.heap.length - 1, 0)
                let extractedValue = this.heap.pop()
                this.downheapify(0)
                return extractedValue
            }
        
            upHeapify(idx) {
                while(idx > 0) {
                    let parent = Math.floor((idx - 1) / 2)
        
                    if(this.heap[parent] > this.heap[idx]) {
                        this.swap(idx, parent)
                        idx = parent
                    } else {
                        break
                    }
                }
            }
        
            downheapify(idx) {
                while(2*idx + 1 < this.heap.length) {
                    let left = 2*idx + 1
                    let right = 2*idx + 2
        
                    let smallest = left
        
                    if(right < this.heap.length && this.heap[right] < this.heap[left]) {
                        smallest = right
                    }
        
                    if(this.heap[idx] <= this.heap[smallest]) return 
        
        
                    this.swap(idx, smallest)
        
                    idx = smallest
                
                } 
            }
        
            swap(i,j) {
                let temp = this.heap[i]
                this.heap[i] = this.heap[j]
                this.heap[j] = temp
            }
        }    

        let heap = new MinHeap()

        let ans = []

        A -= 1

        for(let i = 0 ; i < B.length ; i++) {
            if(i < A) {
                ans.push(-1)
                heap.insert(B[i])
            } else if (i == A) {
                heap.insert(B[i])
                ans.push(heap.heap[0])
            } else {
                heap.insert(B[i])
                heap.extract()
                ans.push(heap.heap[0])
            }
        }   

        return ans 
	}
};
