import { BSTNum, BNode } from "../common/bst";

/** insertRecursively(val): Insert a new node into the BST with value val.
 * Uses recursion. */

function insertRecur(bst: BSTNum, val: number): void {
  const newNode = new BNode(val);

  if (bst.root === null) {
    bst.root = newNode;
    return;
  }

  if (val < bst.root.val) {
    insertRecur(new BSTNum(bst.root.left), val);
    bst.root.left = newNode;
    return;
  } else if (val > bst.root.val) {
    insertRecur(new BSTNum(bst.root.right), val);
    bst.root.right = newNode;
    return;
  }



}

export { insertRecur };

