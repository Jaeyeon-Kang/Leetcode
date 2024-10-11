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
    let dummy = new ListNode(0);  // 결과를 담을 더미 노드
    let p = l1, q = l2, current = dummy;
    let carry = 0;  // 자리 올림을 저장하는 변수
    
    while (p !== null || q !== null) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);  // 자리 올림 계산
        current.next = new ListNode(sum % 10);  // 현재 자릿수의 값을 저장
        current = current.next;
        
        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }
    
    if (carry > 0) {
        current.next = new ListNode(carry);  // 마지막 자리 올림이 있으면 추가
    }
    
    return dummy.next;  // 더미 노드 다음부터가 결과 리스트
};
