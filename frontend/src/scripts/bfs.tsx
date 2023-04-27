import { BoardObj } from "../models/board";
import { nextMoves, winTest, generateStub } from "./scripts";

export function bfs(obj: BoardObj): BoardObj {
  // starting element
  let current: BoardObj = obj.copy();
  let list: BoardObj[] = [current];
  // 18674 all 12 level

  while (list.length) {
    current = list.shift()!;

    if (winTest(current)) return current;
    else {
      // add next moves to list
      // eslint-disable-next-line no-loop-func
      nextMoves(current).forEach((direction) => {
        list.push(current.copy().move(direction));
      });
    }
  }
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
  obj.board = "**D*******C**BA ";
  console.log("============== START ================");
  console.log(obj.toString());
  let start = Date.now();

  obj = bfs(obj);

  console.log(`time = ${Date.now() - start} ms`);
  console.log("============== STOP ================");
  console.log(obj.toString());
}

export function bfsTest(set: string) {
  let obj = generateStub(set);

  console.log("============== START ================");
  console.log("==============  BFS  ================");
  console.log(obj.toString());
  let start = Date.now();

  obj = bfs(obj);

  console.log(
    "Time -",
    new Date(Date.now() - start).toJSON().substring(11, 23),
    " h:min:sec.milisec"
  );
  console.log("============== STOP ================");
  console.log(obj.toString());
}
