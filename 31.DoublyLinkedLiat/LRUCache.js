module.exports = {
    LRUCache: function(capacity){

        // -------------------------------
        // Node class for doubly linked list
        // -------------------------------
        class Node {
            constructor(key, value) {
                this.key = key;     // store key → needed to remove from Map
                this.value = value; // store value
                this.prev = null;   // pointer to previous node
                this.next = null;   // pointer to next node
            }
        }

        // Pointers for doubly linked list
        let head = null;  // Least Recently Used (LRU)
        let tail = null;  // Most Recently Used (MRU)

        // HashMap for O(1) lookup
        let map = new Map();


        // ---------------------------------------------------------
        // Move a node to the tail (mark as most recently used)
        // ---------------------------------------------------------
        function moveToTail(node) {

            // If it is already the tail → nothing to do
            if (node === tail) return;

            // Case 1: Node is at the head
            if (node === head) {

                head = head.next;   // move head forward
                head.prev = null;   // new head has no previous

            } else {
                // Case 2: Node is in the middle

                // Remove the node from the list
                node.prev.next = node.next;
                node.next.prev = node.prev;
            }

            // Attach node at the tail
            node.prev = tail;   // link node after tail
            node.next = null;   // tail is always the end
            tail.next = node;   // old tail now points to this node
            tail = node;        // update tail to node
        }


        // ---------------------------------------------------------
        // Remove head (LRU element)
        // Returns the removed node so we can delete it from map
        // ---------------------------------------------------------
        function removeHead() {

            if (!head) return null; // safety guard

            let removed = head; // store removed node

            // If only one node in list
            if (head === tail) {
                head = tail = null;
            } 
            else {
                // More than one node
                head = head.next;   // move head forward
                head.prev = null;   // new head has no previous
            }

            return removed; // send the removed node back
        }


        // =====================================================================
        // PUBLIC METHODS: get() and set()
        // =====================================================================
        return {

            // -------------------------------------------------
            // GET: return value and mark node as recently used
            // -------------------------------------------------
            get(key) {

                // If not in cache → return -1
                if (!map.has(key)) return -1;

                // Fetch node
                let node = map.get(key);

                // Move to tail to mark as most recently used
                moveToTail(node);

                // Return value
                return node.value;
            },


            // -------------------------------------------------
            // SET: insert or update value
            // -------------------------------------------------
            set(key, value) {

                // Case 1: Key already exists → update + move to tail
                if (map.has(key)) {

                    let node = map.get(key); // get existing node
                    node.value = value;      // update value

                    moveToTail(node);        // mark as recently used
                    return;
                }


                // Case 2: Key does not exist → insert new node

                // If cache is full → evict LRU (head)
                if (map.size === capacity) {

                    let removed = removeHead(); // remove from list
                    map.delete(removed.key);     // remove from map
                }

                // Create new node
                let newNode = new Node(key, value);

                // Add to Map
                map.set(key, newNode);

                // If list is empty → this is first node
                if (!head) {
                    head = tail = newNode;
                    return;
                }

                // Otherwise, attach new node at the tail (most recent)
                tail.next = newNode;
                newNode.prev = tail;
                tail = newNode;
            }
        }
    }
}
