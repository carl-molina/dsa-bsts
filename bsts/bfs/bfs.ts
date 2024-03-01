import { BNodeNum } from "../common/bst";
import { Queue } from "../common/queue";


/** bfs(): Traverse the BST using BFS.
 * Returns an array of visited nodes. */

function bfs(node: BNodeNum | null): number[] {
  const nums: number[] = [];
  const toVisit = [node];
  console.log('toVisit.length', toVisit.length);
  if (!node) return [];

  console.log('Before while loop');
  while (toVisit.length !== 0) {
    let curr = toVisit.shift();
    console.log('This is curr:', curr);
    debugger;

    if (curr) nums.push(curr.val);

    console.log('This is nums after push:', nums);

    if (curr!.left) {
      toVisit.push(curr!.left);
    }
    if (curr!.right) {
      toVisit.push(curr!.right);
    }
  }

  return nums;
}

export { bfs };