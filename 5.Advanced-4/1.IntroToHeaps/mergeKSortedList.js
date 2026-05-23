// Q1. Merge K Sorted Lists

// Problem Description

// Given a list containing head pointers of N sorted linked lists.
// Merge these given sorted linked lists and return them as one sorted list.

// Problem Constraints
// 1 <= total number of elements in given linked lists <= 100000

// Input Format
// The first and only argument is a list containing N head pointers.

// Output Format
// Return a pointer to the head of the sorted linked list after merging all the given linked lists.


// Example Input

// Input 1:
//  1 -> 10 -> 20
//  4 -> 11 -> 13
//  3 -> 8 -> 9

// Input 2:
//  10 -> 12
//  13
//  5 -> 6

// Example Output

// Output 1:
//  1 -> 3 -> 4 -> 8 -> 9 -> 10 -> 11 -> 13 -> 20

// Output 2:
//  5 -> 6 -> 10 -> 12 ->13

// Example Explanation

// Explanation 1:
//  The resulting sorted Linked List formed after merging is 1 -> 3 -> 4 -> 8 -> 9 -> 10 -> 11 -> 13 -> 20.

// Explanation 2:
//  The resulting sorted Linked List formed after merging is 5 -> 6 -> 10 -> 12 ->13.






// Definition for singly-linked list.
//			function Node(data){
//				this.data = data
//				this.next = null
//			}



module.exports = {
  //param A : array of integers
  //return the head node in the linked list
    mergeKLists: function (A) {

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
        
                    if(this.heap[parent].data > this.heap[idx].data) {
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
        
                    if(right < this.heap.length && this.heap[right].data < this.heap[left].data) {
                        smallest = right
                    }
        
                    if(this.heap[idx].data <= this.heap[smallest].data) return 
        
        
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

        class Linkedlist {
            constructor() {
                this.head = null 
                this.size = 0
            }

            push(position, value) {
                if(position < 1 || position > this.size + 1) {
                    console.log("invalid position")
                    return 
                }

                let node = new Node(value)
                let temp = node 
                if(position == 1) {
                    temp.next = this.head
                    this.head = temp 
                } else {
                    let prev = this.head 
                    let i = 1 
                    while( i < position -1) {
                        prev = prev.next
                        i++ 
                    }

                    temp.next = prev.next 
                    prev.next = temp 
                }

                this.size++
            }

            pop(position) {
                if(position < 1 || position > this.size ) {
                    console.log("Invalid position")
                    return 
                }

                let temp 

                if(position == 1) {
                    temp = this.head
                    this.head = this.head.next 
     
                } else {
                    let prev = this.head 
                    let i = 1 
                    while (i < position - 1) {
                        prev = prev.next 
                        i++
                    }

                    temp = prev.next 
                    prev.next = prev.next.next 
                }

                this.size--
                return temp
            }

            get (pos) {
                if(pos < 1 || pos > this.size) {
                    console.log("Invalid position")
                    return 
                }

                if(pos == 1) {
                    return this.head.data
                } else {
                    let i = 1 
                    let prev = this.head 

                    while(i < pos -1 ){
                        prev = prev.next
                        i++ 
                    }

                    return prev.next.data
                }
            }
        }  

        let heap = new MinHeap()
        let linkedlist = new Linkedlist()

        for (let i = 0 ; i < A.length; i++) {
            let node = A[i]
            heap.insert(node)
        }


        let pos = 1

        while(heap.heap.length > 0) {
            let element = heap.extract()
            linkedlist.push(pos ,element.data)

            let nextNode = element.next 

            if(nextNode !== null) heap.insert(nextNode)
            pos++
        }


        return linkedlist.head

    },
};
