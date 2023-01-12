import { BoardObj } from "../models/board";
import { nextMoves, winTest, generateStub } from "./scripts";

export function bfs(obj: BoardObj): BoardObj {
  // starting element
  let current: BoardObj = obj.copy();
  let list: BoardObj[] = [current];
  let save: number = 18674;

  while (list.length && save > 0) {
    save--;
    current = list.shift()!;

    // console.log("---- current ------------");
    // console.log(current.toString());
    // console.log("--- Lista - " + list.length + ", save - " + save);
    // list.forEach((e) => console.log(e.toString()));
    // console.log("--- moves ---");
    // console.log(`[${nextMoves(current).toString()}]`);
    // console.log("==============================");

    if (winTest(current)) {
      // console.log("--------------WIN------------");
      // console.log(current.toString());

      return current;
    } else {
      // add next moves to list
      // eslint-disable-next-line no-loop-func
      nextMoves(current).forEach((direction) => {
        list.push(current.copy().move(direction));
        // console.log(list.length);
      });
    }
  }
  console.log(`--- BFS --- save work --- List - ${list.length}`);

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
