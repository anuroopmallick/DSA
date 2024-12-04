/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  var head1 = list1;
  var head2 = list2;
  var mergedHead = null;

  if (head1 === null && head2 !== null) {
    return head2;
  } else if (head2 === null && head1 !== null) {
    return head1;
  } else if (head2 === null && head1 === null) {
    return null;
  }

  //   or
  //   if(head1 === null) {
  //     return head2
  // } else if (head2 === null) {
  //     return head1
  // }

  if (head1.val >= head2.val) {
    mergedHead = head2;
    head2 = head2.next;
  } else {
    mergedHead = head1;
    head1 = head1.next;
  }

  var ans = mergedHead;

  while (head1 !== null && head2 !== null) {
    if (head1.val >= head2.val) {
      ans.next = head2;
      head2 = head2.next;
    } else {
      ans.next = head1;
      head1 = head1.next;
    }

    ans = ans.next;
  }

  if (head1 !== null) {
    ans.next = head1;
  }

  if (head2 !== null) {
    ans.next = head2;
  }

  return mergedHead;
};
