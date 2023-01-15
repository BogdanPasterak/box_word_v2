import { BoardObj } from "../models/board";
import { nextMoves, winTest, generateStub } from "./scripts";

export function dfs(obj: BoardObj): BoardObj {
  // starting element
  let current: BoardObj = obj.copy();
  let stack: BoardObj[];
  let index = 0;
  let steps = [];
  let count = 0;
  let start = Date.now();
  let temp = 0;
  let now = 0;

  // deeps level limit
  for (let l = 0; l < 20; l++) {
    console.log(`------- Level ${l} ---------`);

    stack = [obj.copy()];
    while (stack.length) {
      // count++;
      // if (count > 50) break;
      current = stack.pop()!;
      // if match
      if (current.from.length > l) continue;
      // console.log(current.toString() + "  Size : " + stack.length);
      if (winTest(current)) break;
      // eslint-disable-next-line no-loop-func
      nextMoves(current).forEach((direction) => {
        stack.push(current.copy().move(direction));
      });
    }
    if (winTest(current)) break;
  }
  return current;
}

export function dfsStart() {
  // 0
  // bfs(new BoardObj("********ABCD*** ", "ABCD"));
  // 1
  // let obj = new BoardObj("********ABC ***D", "ABCD");
  // obj.pos = 11;

  let obj = generateStub();
  console.log("============== START ================");
  console.log(obj.toString());
  obj = dfs(obj);
  console.log("============== STOP ================");
  console.log(obj.toString());
}
