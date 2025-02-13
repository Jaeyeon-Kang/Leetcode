/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {
       const gcd = (a,b) => (a%b == 0 ? b : gcd(b, a%b))
        
        let cur = head
        while(cur !== null && cur.next !== null){
          let a = cur.val
          let b = cur.next.val
          let newNode = new ListNode(gcd(a,b), cur.next)
          cur.next = newNode
          cur = newNode.next
        }

    return head       
   
};