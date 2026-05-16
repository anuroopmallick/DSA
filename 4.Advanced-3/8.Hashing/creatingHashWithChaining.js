class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.next = null
    }
}

class Linkedlist {
    constructor() {
        this.head = null
        this.size = 0
    }

    insert(position, key, value) {

        if(position < 1 || position > this.size + 1) {
            console.log("Invalid position")
            return
        }

        let temp = new Node(key, value)

        if(position == 1) {
            temp.next = this.head
            this.head = temp
        } else {

            let prev = this.head
            let i = 1

            while(i < position - 1) {
                prev = prev.next
                i++
            }

            temp.next = prev.next
            prev.next = temp
        }

        this.size++
    }

    delete(position) {

        if(position < 1 || position > this.size) {
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

            while(i < position - 1) {
                prev = prev.next
                i++
            }

            temp = prev.next
            prev.next = temp.next
        }

        this.size--
    }

    getIndexNode(position) {
        if(position < 1 || position > this.size) {
            console.log("invalid Position")
            return 
        }

        let i = 1 
        let temp = this.head
        while(temp !== null) {
            if(i == position) {
               return temp
            }   
            temp = temp.next 
            i++
        }
    }
}

class MyHashmap {
    constructor() {
        this.initialsize = 16 
        this.totalelements = 0
        this.threshold = 0.75
        this.buckets = new Array(16)

        for(let i = 0 ; i < this.initialsize ; i++) {
            this.buckets[i] = new Linkedlist()
        }
    } 

    set(key, value) {
        let bucketindex = this.findBucketIndex(key)

        let bucketLL = this.buckets[bucketindex] 
        
        let elementIndex = this.searchForElement(bucketLL , key)

        if(elementIndex == -1) {
            let endindex = bucketLL.size + 1
            bucketLL.insert(endindex, key, value)
            this.totalelements++
        } else {
            let node = bucketLL.getIndexNode(elementIndex)
            node.value = value
        }

        let loadFactor = this.totalelements / this.initialsize
        if(loadFactor > this.threshold) {
            this.rehash()
        }
    }

    get(key) {
        let bucketindex = this.findBucketIndex(key)

        let bucketLL = this.buckets[bucketindex]

        let elementIndex = this.searchForElement(bucketLL, key)

        if(elementIndex == -1) {
            poscess.stdout.write("Element does not exist")
            return -1
        } else {
            let node = bucketLL.getIndexNode(elementIndex)
            return node.value 
        }
    }

    has(key) {
        let bucketindex = this.findBucketIndex(key)

        let bucketLL = this.buckets[bucketindex]

        let elementIndex = this.searchForElement(bucketLL, key) 

        if(elementIndex == -1) {
            return false
        } else {
            return true
        }
    }

    printall() {
        for(let ll of this.buckets) {
            let temp = ll.head
            while(temp !== null) {
                console.log(`[${temp.key} : ${temp.value}]`)
                temp = temp.next
            }
        }
    }

    findBucketIndex(key) {
        return key % this.buckets.length 
    }

    searchForElement(linkedlist , key) {
        let temp = linkedlist.head
        let i = 1
        while(temp !== null) {
            if(temp.key === key) {
                return i
            }
            temp = temp.next
            i++
        }

        return -1
    }

    rehash() {
        let buckets = [...this.buckets]

        let bucketsSize = buckets.length * 2
        this.initialsize = bucketsSize
        this.buckets = new Array(bucketsSize)
        this.totalelements = 0

        for(let i = 0 ; i < bucketsSize; i++) {
            this.buckets[i] = new Linkedlist()
        }

        for(let ll of buckets) {
            let temp = ll.head 
            while(temp !== null) {
                this.set(temp.key, temp.value)
                temp = temp.next 
            }
        }
    }
}

let arr = [1,3,6,8,4,3,5,7,8,9,0,4,5,6,7,4,32,2,34,4,5,7,8,9,76,5,4,4,3,3,4,5,7,7]
let countmap = new MyHashmap()

for(let i of arr) {
    if(countmap.has(i)) {
        let val = countmap.get(i)
        countmap.set(i, val+1)
    } else {
        countmap.set(i, 1)
    }
}

countmap.printall()