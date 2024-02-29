import { BSTNum, BNode } from "../common/bst";

/** insertRecursively(val): Insert a new node into the BST with value val.
 * Uses recursion. */

function insertRecursively(bst: BSTNum, val: number): void {
  const newNode = new BNode(val);
  
  if (bst.root === null) {
    bst.root = newNode;
  }

  if (val < bst.root.val) {
    newNode.right = bst.root;
  }

  //else if val > bst.root.val
  //TODO: 
}

export { insertRecursively };

