import { BSTNum, BNode } from "../common/bst";

/** insertRecursively(val): Insert a new node into the BST with value val.
 * Uses recursion. */

function insertRecur(bst: BSTNum, val: number): void {
  const newNode = new BNode(val);

  if (bst.root === null) {
    bst.root = newNode;
    console.log('This is newNode which is now root:', bst.root);
    return;
  }

  if (val < bst.root.val) {
    insertRecur(new BSTNum(bst.root.left), val);
    bst.root.left = newNode;
    console.log('Original root after left:', bst.root);
    return;
  } else if (val > bst.root.val) {
    insertRecur(new BSTNum(bst.root.right), val);
    console.log('Original root after right:', bst.root);
    bst.root.right = newNode;
    return;
  }



}

export { insertRecur };

