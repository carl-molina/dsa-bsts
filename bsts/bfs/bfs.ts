import { BNodeNum } from "../common/bst";
import { Queue } from "../common/queue";


/** bfs(): Traverse the BST using BFS.
 * Returns an array of visited nodes. */

function bfs(node: BNodeNum | null): number[] {
  const nums: number[] = [];
  const toVisit = new Queue([node]);
  if (!node) return [];

  while (!toVisit.isEmpty()) {
    let curr = toVisit.dequeue();
    if (curr) nums.push(curr.val);
  }
  toVisit.enqueue(node.left);
  toVisit.enqueue(node.right);

  return nums;
}

export { bfs };