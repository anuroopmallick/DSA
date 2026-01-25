// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return a array of integers
  postorderTraversal: function (A) {
    let arr = [];

    function solve(node) {
      if (node == null) return;

      solve(node.left);

      solve(node.right);

      arr.push(node.data);
    }

    solve(A);

    return arr;
  },
};
