// Q4. Bth Smallest Element

// Problem Description
// You are given an integer array A of size N, and an integer B.
// You need to find the Bth smallest element in the array A.



// Problem Constraints
// 1 ≤ N ≤ 10^5
// 1 ≤ A[i] ≤ 10^9
// 1 ≤ B ≤ N


// Input Format
// The first argument is the integer array, A.
// The second argument is an integer B.

// Output Format
// Return the Bth smallest integer from the given array A.

// Example Input
// Input 1:
// A = [5, 4, 3, 2, 1]  
// B = 2

// Input 2:
// A = [1, 2]
// B = 1

// Example Output
// Output 1:
// 2

// Output 2:
// 1

// Example Explanation
// Explanation 1:
// The 2nd smallest element in A is 2.

// Explanation 2:
// The 1st smallest element in A is 1.


module.exports = { 
 //param A : array of integers
 //param B : integer
 //return an integer
	bthSmallest : function(A, B){

        // brute force is sort the array and return Bth element 
        // Tc : nlogn 

        //Optimization 
        // use min heap 
        // TC: o(n)

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
        
        let heap = new MinHeap(A)

        for (let i = 0 ; i < B; i++) {
            if(i + 1 == B) {
                return heap.heap[0]
            }

            heap.extract()
        } 

        return heap.heap[0]
        
	}
};        
        