// Q3. Running Median

// Problem Description
// Flipkart is currently dealing with the difficulty of precisely estimating and displaying the 
// expected delivery time for orders to a specific pin code. The existing method relies on historical 
// delivery time data for that pin code, using the median value as the expected delivery time. 
// As the order history expands with new entries, Flipkart aims to enhance this process by dynamically 
// updating the expected delivery time whenever a new delivery time is added. The objective is to find the 
// expected delivery time after each new element is incorporated into the list of delivery times. 
// End Goal: With every addition of new delivery time, requirement is to find the median value.

// Why Median ? The median is calculated because it provides a more robust measure of the expected delivery 
// time The median is less sensitive to outliers or extreme values than the mean. In the context of delivery 
// times, this is crucial because occasional delays or unusually fast deliveries (outliers) can skew the mean 
// significantly, leading to inaccurate estimations.


// Given an array of integers, A denoting the delivery times for each order. New arrays of integer B and C 
// are formed, each time a new delivery data is encountered, append it at the end of B and append the median
//  of array B at the end of C. Your task is to find and return the array C.

// NOTE:

//  If the number of elements is N in B and N is odd, then consider the median as B[N/2]
//  ( B must be in sorted order).
//  If the number of elements is N in B and N is even, then consider the median as B[N/2-1]. 
//  ( B must be in sorted order).


// Problem Constraints

// 1 <= length of the array <= 100000
// 1 <= A[i] <= 109


// Input Format
// The only argument given is the integer array A.

// Output Format
// Return an integer array C, C[i] denotes the median of the first i delivery times.


// Example Input
// Input 1:
//  A = [1, 2, 5, 4, 3]

// Input 2:
//  A = [5, 17, 100, 11]

// Example Output
// Output 1:
//  [1, 1, 2, 2, 3]

// Output 2:
//  [5, 5, 17, 11]

// Example Explanation

// Explanation 1:

//  Delivery Times      median
//  [1]                   1
//  [1, 2]                1
//  [1, 2, 5]             2 
//  [1, 2, 5, 4]          2
//  [1, 2, 5, 4, 3]       3

// Explanation 2:

//  Delivery Times     median
//  [5]                  5
//  [5, 17]              5
//  [5, 17, 100]         17
//  [5, 17, 100, 11]     11 


// Brute force is sort array every time then return median 
//TC: n * nlogn


//optimize it using min heap and max heap 

// max heap maintains first half 
//min heap maintains second half 

//return last element of min heap as it is median

//1st element goes to max heap then if larger to min heap or if smaller to mac heap 
//After every insertion we balance the heap. This gives us median at every stage
//TC: n logn 

module.exports = { 
 //param A : array of integers
 //return a array of integers
	solve : function(A){

        class Minheap {
            constructor(arr = []) {
                this.heap = [...arr]

                let leafnode = Math.floor(this.heap.length/2)-1

                for(let i = leafnode; i >= 0 ; i--) {
                    this.downheapify(i)
                }
            }

            insert (val) {
                this.heap.push(val)
                this.upheapify(this.heap.length - 1)
            }

            extract() {
                this.swap(this.heap.length - 1 , 0)
                let temp = this.heap.pop()
                this.downheapify(0)
                return temp
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

            upheapify(idx) {
                while(idx > 0) {
                    let par = Math.floor((idx - 1) / 2)

                    if(this.heap[par] > this.heap[idx]) {
                        this.swap(idx,par)
                        idx = par
                    } else {
                        break
                    }
                }
            }

            swap(i,j) {
                let temp = this.heap[i]
                this.heap[i] = this.heap[j]
                this.heap[j] = temp
            }
        }

        class MaxHeap {
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
        
                    if(this.heap[parent] < this.heap[idx]) {
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
        
                    let largest = left
        
                    if(right < this.heap.length && this.heap[right] > this.heap[left]) {
                        largest = right
                    }
        
                    if(this.heap[idx] >= this.heap[largest]) return 
        
        
                    this.swap(idx, largest)
        
                    idx = largest
                
                } 
            }
        
            swap(i,j) {
                let temp = this.heap[i]
                this.heap[i] = this.heap[j]
                this.heap[j] = temp
            }
        }    
    
        let minHeap = new Minheap()
        let maxHeap = new MaxHeap()
        let ans = []

        for(let i = 0 ; i < A.length; ++i) {
            if(i == 0) {
                maxHeap.insert(A[i])
            } else {
                if(A[i] > maxHeap.heap[0]) {
                    minHeap.insert(A[i])
                } else {
                    maxHeap.insert(A[i])
                }
            }

            if(maxHeap.heap.length > minHeap.heap.length + 1) {
                let val = maxHeap.extract()
                minHeap.insert(val)
            } else if (minHeap.heap.length > maxHeap.heap.length) {
                let val = minHeap.extract()
                maxHeap.insert(val)
            }

            ans.push(maxHeap.heap[0])

        }


        return ans

	}
};
