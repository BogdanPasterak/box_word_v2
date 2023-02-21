import { ABoardObj } from "../models/aboard";
import { BoardObj } from "../models/board";
import { PriorityQueue } from "../models/priorityQueue";
import { winTest, generateStub, nextMoves } from "./scripts";

const aDist = "0000011101220123";
const bDist = "1011000010111012";
const cDist = "2101110100001101";
const dDist = "3210221011100000";
const steps = [0, 1, 6, 11];

// A * algorythm
export function a(obj: BoardObj): BoardObj {
  // starting element
  let current: BoardObj = obj.copy();
  // initial queue with starting object
  let queue: PriorityQueue = new PriorityQueue(
    new ABoardObj(current, estimation(current))
  );
  let now: ABoardObj;
  let count = 0;

  while (!queue.isEmpty()) {
    now = queue.dequeue();
    // win
    if (winTest(now)) return now;
    if (++count > 200000) {
      console.log("========== BREAK ===========");
      current = now;
      break;
    }

    // console.log(
    //   `--- Now, queue size = ${queue.items.length}, count = ${count}`
    // );

    // console.log(now.toString());

    // eslint-disable-next-line no-loop-func
    nextMoves(now).forEach((p) => {
      // console.log("moves", p);
      now.move(p);
      queue.enqueue(new ABoardObj(now, estimation(now)));
      now.back();
    });
  }

  return current;
}

export function aStart() {
  let obj = generateStub();
  obj.board = "**D*******C**BA ";
  // obj.board = "*C***D**B*****A "; // 19

  console.log("============== START ================");
  console.log(obj.toString());
  let start = Date.now();

  obj = a(obj);
  console.log(`time = ${Date.now() - start} ms`);
  console.log("============== STOP ================");
  console.log(obj.toString());
}

function estimation(obj: BoardObj): number {
  let sum = 0;
  // h(x)
  // first letter
  let aPos = obj.board.indexOf(obj.word[0]);
  sum += steps[Number(aDist[aPos])];
  // let cs = closeSmaller(aPos, aDist);
  // if (cs !== aPos) {
  //   sum += stepsSpace(cs, obj.pos);
  // }
  // secound letter
  let bPos = obj.board.indexOf(obj.word[1]);
  sum += steps[Number(bDist[bPos])];
  // third letter
  let cPos = obj.board.indexOf(obj.word[2]);
  sum += steps[Number(cDist[cPos])];
  // last letter
  let dPos = obj.board.indexOf(obj.word[3]);
  sum += steps[Number(dDist[dPos])];

  // curent steps number g(x)
  sum += obj.from.length;

  // console.log(sum);

  return sum;
}

// find one off 4 neighborw if closer to 0
function closeSmaller(orgin: number, dist: string): number {
  if (dist[orgin] === "0") return orgin;
  if (orgin > 3 && dist[orgin] > dist[orgin - 4]) return orgin - 4;
  if (orgin % 4 && dist[orgin] > dist[orgin - 1]) return orgin - 1;
  if (orgin % 4 < 3 && dist[orgin] > dist[orgin + 1]) return orgin + 1;
  if (orgin < 12 && dist[orgin] > dist[orgin + 4]) return orgin + 4;
  console.log("-------- error closeSmaller -----------------");

  return orgin;
}

// number moves to set space on target place
function stepsSpace(to: number, from: number): number {
  if (to > from) {
    let temp = to;
    to = from;
    from = temp;
  }
  from -= to;
  let distance = (from % 4) + Math.floor(from / 4);

  return distance + (distance - 1) * 5;
}
