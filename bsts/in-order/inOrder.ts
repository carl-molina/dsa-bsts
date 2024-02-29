import { BNodeNum } from "../common/bst";

/** inOrder(): Traverse from the invoking node using in-order DFS.
 * Returns an array of visited nodes. */

function inOrder(node: BNodeNum | null): number[] {

  // base case
  if (!node) return [];

  const nums: number[] = [];

  if (node.left) {
    nums.push(...inOrder(node.left));
  }

  nums.push(node.val);

  if (node.right) {
    nums.push(...inOrder(node.right));
  }
  return nums;
}



/** inOrderAccum(): Traverse the BST using in-order DFS.
 * Returns an array of visited nodes.
 * Uses an "accumulator"
 */

function inOrderAccum(
  node: BNodeNum | null = null,
  accum: number[] = []): number[] {
  return [42];
}


export { inOrder, inOrderAccum };
