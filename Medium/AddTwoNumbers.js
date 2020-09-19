/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let answerNode = new ListNode(0);
    let current = answerNode;
    let carry = 0;
    let firstLinkedList = l1;
    let secondLinkedList = l2;
    
    while (firstLinkedList || secondLinkedList) {
        let first = firstLinkedList ? firstLinkedList.val : 0;
        let second = secondLinkedList ? secondLinkedList.val : 0; 
        
        let sum = first + second + carry;
        carry = parseInt(sum / 10);
        current.next = new ListNode(parseInt(sum%10));
        current = current.next;
        
        if (firstLinkedList != null)
            firstLinkedList = firstLinkedList.next
        if (secondLinkedList != null)
            secondLinkedList = secondLinkedList.next
    }
    
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    
    return answerNode.next
}

//Reversing linkedlist expensive O(5n) but surprisingly got good results in leetcode
var addTwoNumbers = function(l1, l2) {
    let firstReversedNode = reverseLinkedList(l1);
    let secondReversedNode = reverseLinkedList(l2);
    
    let firstNum = "";
    let secondNum = "";
    
    while (firstReversedNode != null) {
        firstNum += firstReversedNode.val;
        firstReversedNode = firstReversedNode.next;
    }
    
    while (secondReversedNode != null) {
        secondNum += secondReversedNode.val;
        secondReversedNode = secondReversedNode.next;
    }
    
    var total = (BigInt(firstNum) + BigInt(secondNum)).toString();

    var answerListNode = new ListNode(parseInt(total[0]), null);
    var head = answerListNode;
    for(let i = 1; i<total.length; i++) {
        answerListNode.next= new ListNode(parseInt(total[i]), null);
        answerListNode = answerListNode.next;
    }
    
    answerListNode = reverseLinkedList(head);
    return answerListNode;
};

const reverseLinkedList = (head) => {
    let prev = null;
    let current = head;
    let next = null;
    
    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    

    return prev;
}