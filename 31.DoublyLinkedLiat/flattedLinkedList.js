// Q2. Flatten a linked list

// Problem Description
// Given a linked list where every node represents a linked list and contains two pointers of its type:

// Pointer to next node in the main list (right pointer)
// Pointer to a linked list where this node is head (down pointer). All linked lists are sorted.
// You are asked to flatten the linked list into a single list. Use down pointer to link nodes of the flattened list.
//  The flattened linked list should also be sorted.

// Problem Constraints
// 1 <= Total nodes in the list <= 100000
// 1 <= Value of node <= 109

// Input Format
// The only argument given is head pointer of the doubly linked list.

// Output Format
// Return the head pointer of the Flattened list.

// Example Input
// Input 1:
//    3 -> 4 -> 20 -> 20 ->30
//    |    |    |     |    |
//    7    11   22    20   31
//    |               |    |
//    7               28   39
//    |               |
//    8               39
// Input 2:
//    2 -> 4
//    |    |
//    7    11
//    |
//    7

// Example Output
// Output 1:
//  3 -> 4 -> 7 -> 7 -> 8 -> 11 -> 20 -> 20 -> 20 -> 22 -> 28 -> 30 -> 31 -> 39 -> 39
// Output 2:
//  2 -> 4 -> 7 -> 7 -> 11

// Definition for the linked list.
//			function Node(data){
//				this.data = data
//				this.right = null
//              this.down = null
//			}
function mergeTwoLists(A, B) {
  let headA = A;
  let headB = B;
  if (headA == null) {
    return headB;
  }
  if (headB == null) {
    return headA;
  }
  let mainHead = null;
  if (headA.data < headB.data) {
    mainHead = headA;
    headA = headA.down;
  } else {
    mainHead = headB;
    headB = headB.down;
  }
  let ans = mainHead;
  while (headA !== null && headB !== null) {
    if (headA.data < headB.data) {
      mainHead.down = headA;
      mainHead = mainHead.down;
      headA = headA.down;
    } else {
      mainHead.down = headB;
      mainHead = mainHead.down;
      headB = headB.down;
    }
  }
  while (headA !== null) {
    mainHead.down = headA;
    mainHead = mainHead.down;
    headA = headA.down;
  }
  while (headB !== null) {
    mainHead.down = headB;
    mainHead = mainHead.down;
    headB = headB.down;
  }
  return ans;
}

function flatten(root) {
  if (root == null || root.right == null) {
    return root;
  }

  let sorted = root;
  let head = root;
  while (head.right !== null) {
    sorted = mergeTwoLists(sorted, head.right);
    head = head.right;
  }

  return sorted;
}
