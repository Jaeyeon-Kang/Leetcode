/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */


var isSymmetric = function(root) {
    if (!root) return true;
    return isMirror(root.left, root.right);
    
};

var isMirror = function (left, right) {
    if (!left && !right) {
        // console.log("Both nodes are null, returning true.");
        return true;
    }

    if (!left || !right || left.val !== right.val) {
        // console.log("Nodes are not symmetric, returning false.");
        return false;
    }

    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
    
};