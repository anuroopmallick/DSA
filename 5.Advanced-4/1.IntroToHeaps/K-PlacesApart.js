module.exports = { 
 //param A : array of integers
 //param B : integer
 //return a array of integers
	solve : function(A, B){

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

        let heap = new Minheap()

        let ans = []

        B = B-1

        let i = 0


        for(let i = 0 ; i < A.length; i++) {
            if(i <= B) {
                heap.insert(A[i])
            } else  {
                heap.insert(A[i])
                let val = heap.heap[0]
                ans.push(val)
                heap.extract()
            }
        }

        while(heap.heap.length > 0) {
            let val = heap.heap[0]
            ans.push(val)
            heap.extract()
        }

        return ans

	}
};
