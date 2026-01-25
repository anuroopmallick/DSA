// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return a array of integers
  preorderTraversal: function (A) {
    let ans = [];

    function solve(node) {
      if (node == null) return;

      ans.push(node.data);

      solve(node.left);
      solve(node.right);
    }

    solve(A);

    return ans;
  },
};
