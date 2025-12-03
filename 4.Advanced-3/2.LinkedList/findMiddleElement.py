# Definition for singly-linked list.
# class ListNode:
#    def __init__(self, x):
#        self.val = x
#        self.next = None

class Solution:
    # @param A : head node of linked list
    # @return an integer
    def solve(self, A):

        slow = A 
        fast = A 

        while fast is not None and fast.next is not None:
            slow = slow.next 
            fast = fast.next.next 

        return slow.val



