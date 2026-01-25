// Build Tree from preorder and inorder traversal arrays

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return the root node in the tree
  buildTree: function (A, B) {
    let psi = 0;
    let pei = A.length - 1;
    let isi = 0;
    let iei = B.length - 1;

    function buildTree(preOrder, inOrder, psi, pei, isi, iei) {
      if (isi > iei) return;

      let newNode = new TreeNode(preOrder[psi]);

      let idx = -1;

      for (let i = 0; i < inOrder.length; ++i) {
        if (inOrder[i] == preOrder[psi]) {
          idx = i;
          break;
        }
      }

      newNode.left = buildTree(
        preOrder,
        inOrder,
        psi + 1,
        psi + (idx - isi),
        isi,
        idx - 1,
      );
      newNode.right = buildTree(
        preOrder,
        inOrder,
        psi + (idx - isi) + 1,
        pei,
        idx + 1,
        iei,
      );

      return newNode;
    }

    return buildTree(A, B, psi, pei, isi, iei);
  },
};
