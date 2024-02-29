import { BNodeNum } from "../common/bst";


/** findRecursively(val): Search from the invoking node for a node with value val.
 * Returns the node, if found; else null */

function findRecursively(node: BNodeNum | null, val: number): BNodeNum | null {

  if (!node) return null;
  if (val === node.val) return node;
  if (!node.left && !node.right) return null;

  if (val > node.val) {
    return findRecursively(node.right, val);
  } else if (val < node.val) {
    return findRecursively(node.left, val);
  } else {
    return null;
  }
}


/** find(val): Search the BST for a node with value val.
 * Returns the node, if found; else null. */

function find(node: BNodeNum | null, val: number): BNodeNum | null {

  while (node !== null) {
    if (val === node.val) return node;
    else if (val > node.val) {
      node = node.right
    } else if (val < node.val) {
      node = node.left
    }
  }

  return null;
}

export { findRecursively, find };