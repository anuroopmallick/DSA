class Solution {
    buildHeap(A) {
        // code here
        let lastLeafNode = Math.floor(A.length/2) - 1
        
        for(let i = lastLeafNode; i >= 0 ; i--) {
            this.downheapify(A,i)
        }

        return A
    }

    downheapify(arr, idx) {

        while(2*idx + 1 < arr.length) {

            let min = Math.min(arr[idx], arr[2*idx + 1] , arr[2*idx + 2])

            if(arr[idx] == arr[min]) return 
            else if (arr[2*idx+1] == arr[min]) {
                this.swap(arr, 2*idx+1, idx)
                idx = 2*idx+1
            } else {
                this.swap(arr, 2*idx+2, idx)
                idx = 2*idx+2
            }
        }
    }

    swap(arr,i,j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
}

//TC: O(n) -> How check ipad notes. Derive to find the TC