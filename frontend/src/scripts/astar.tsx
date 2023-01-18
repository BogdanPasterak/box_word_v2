import { BoardObj } from "../models/board";
import { nextMoves, winTest, generateStub } from "./scripts";

export function a(obj: BoardObj): BoardObj {
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
  for (let l = 0; l < 24; l++) {
    if (l > 15) console.log(`------- Level ${l} ---------`);
    steps.push({ index: l, stop: Date.now() });

    stack = [obj.copy()];
    while (stack.length) {
      // log for show work
      // if (!(++count % 5000000)) console.log(Date.now() - start);
      current = stack.pop()!;
      // if over deeps
      if (current.from.length > l) continue;
      // if on deep test off win (before was detected in previose one loop)
      if (current.from.length === l && winTest(current)) break;
      // eslint-disable-next-line no-loop-func
      nextMoves(current).forEach((direction) => {
        stack.push(current.copy().move(direction));
      });
    }
    if (winTest(current)) break;
  }
  steps.map((e) => (e.stop = (e.stop - start) / 1000));
  // steps.map((e) => console.log(e));

  // console.log(`--- steps = ${count}`);

  return current;
}

export function aStart() {
  let obj = generateStub();
  console.log("============== START ================");
  console.log(obj.toString());
  obj = a(obj);
  if (winTest(obj)) console.log("=============  W  I  N  ================");
  else console.log("============== STOP ================");
  console.log(obj.toString());
}
