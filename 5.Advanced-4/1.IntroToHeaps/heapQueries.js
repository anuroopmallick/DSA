// Q5. Heap Queries

// Problem Description
// You have an empty min heap. You are given an array A consisting of N queries. Let P denote A[i][0] 
// and Q denote A[i][1]. There are two types of queries:

// P = 1, Q = -1 : Pop the minimum element from the heap.
// P = 2, 1 <= Q <= 109 : Insert Q into the heap.

// Return an integer array containing the answer for all the extract min operation. If the size of heap is 0, 
// then extract min should return -1.

// Problem Constraints

// 1 <= N <= 105
// 1 <= A[i][0] <= 2
// 1 <= A[i][1] <= 109 or A[i][1] = -1

// Input Format
// The only argument A is a 2D integer array

// Output Format
// Return an integer array

// Example Input

// Input 1:
// A = [[1, -1], [2, 2], [2, 1], [1, -1]]

// Input 2:
// A = [[2, 5], [2, 3], [2, 1], [1, -1], [1, -1]]

// Example Output

// Output 1:
// [-1, 1]

// Output 2:
// [1, 3]



// Example Explanation

// Explanation 1:
// For the first extract operation the heap is empty so it gives -1. For the second extract operation 
// the heap contains the elements 2 and 1. Extract min returns the element 1.

// Explanation 2:
// The heap contains the elements 5, 3 and 1. The first extract min operation gets the element 1 and 
// the second operation gets the element 3.

module.exports = { 
 //param A : array of array of integers
 //return a array of integers
	solve : function(A){

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
                if(this.heap.length == 0) return -1
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

        for (let i = 0 ; i < A.length; ++i) {
            let p = A[i][0]
            let q = A[i][1]

            if(p == 1 && q == -1) {
                let val = heap.extract()
                ans.push(val)
            } else {
                heap.insert(q)
            }
        }

        return ans 

	}
};
