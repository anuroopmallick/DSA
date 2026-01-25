//Q. Build tree from inorder and postorder array

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
    let isi = 0;
    let iei = A.length - 1;
    let psi = 0;
    let pei = B.length - 1;

    function buildTree(inorder, postOrder, isi, iei, psi, pei) {
      if (isi > iei) return null;

      let newNode = new TreeNode(postOrder[pei]);

      let idx = -1;
      for (let i = 0; i < inorder.length; i++) {
        if (inorder[i] == postOrder[pei]) {
          idx = i;
          break;
        }
      }

      newNode.left = buildTree(
        inorder,
        postOrder,
        isi,
        idx - 1,
        psi,
        psi + (idx - isi) - 1,
      );
      newNode.right = buildTree(
        inorder,
        postOrder,
        idx + 1,
        iei,
        psi + (idx - isi),
        pei - 1,
      );

      return newNode;
    }

    return buildTree(A, B, isi, iei, psi, pei);
  },
};
