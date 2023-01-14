import { BoardObj } from "../models/board";
import { nextMoves, winTest, generateStub } from "./scripts";

export function bfs(obj: BoardObj): BoardObj {
  // starting element
  let current: BoardObj = obj.copy();
  let list: BoardObj[] = [current];
  // 18674 all 12 + one 13
  let index = 0;
  let steps = [];
  let count = 0;
  let start = Date.now();

  while (list.length) {
    if (index < current.from.length) {
      steps.push({ index, count, stop: Date.now() });
      index++;
    }
    count++;
    current = list.shift()!;

    if (winTest(current)) {
      return current;
    } else {
      // add next moves to list
      // eslint-disable-next-line no-loop-func
      nextMoves(current).forEach((direction) => {
        // add if level is less than
        if (current.from.length < 17) list.push(current.copy().move(direction));
      });
    }
  }
  console.log(`--- BFS --- save work --- count - ${count}`);
  steps.map((e) => (e.stop = (e.stop - start) / 1000));
  console.log(steps);

  return current;
}

export function bfsStart() {
  // 0
  // bfs(new BoardObj("********ABCD*** ", "ABCD"));
  // 1
  // let obj = new BoardObj("********ABC ***D", "ABCD");
  // obj.pos = 11;
  // bfs(obj);
  let obj = generateStub();
  console.log("============== START ================");

  console.log(obj.toString());
  console.log(bfs(obj).toString());
}
