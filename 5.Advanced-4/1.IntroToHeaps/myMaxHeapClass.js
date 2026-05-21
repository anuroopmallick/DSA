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
    