import { ABoardObj } from "../models/aboard";
import { BoardObj } from "../models/board";
import { PriorityQueue } from "../models/priorityQueue";
import { arr24 } from "./arr_24";
import { arr25 } from "./arr_25";
import { winTest, generateStub, nextMoves } from "./scripts";
import { unresolved } from "./unresolved";

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
    if (++count > 300000) {
      console.log("========== BREAK ===========");
      console.log("Queue =", queue.items.length);
      current = now;
      break;
    }

    // console.log(
    //   `--- Now, queue size = ${queue.items.length}, count = ${count}`
    // );

    // console.log("Step", count);
    // console.log(now.toString());

    // eslint-disable-next-line no-loop-func
    nextMoves(now).forEach((p) => {
      // console.log("moves", p);
      now.move(p);
      queue.enqueue(new ABoardObj(now, estimation(now)));
      now.back();
    });
  }

  console.log("count", count);

  return current;
}

// A * algorythm
export function a2(obj: BoardObj, max: number = 30): BoardObj {
  // starting element
  let current: BoardObj = obj.copy();
  // initial queue with starting object
  let queue: PriorityQueue = new PriorityQueue(new ABoardObj(obj.copy(), 0));
  let now: ABoardObj;
  let count = 0;
  let est: number;

  while (!queue.isEmpty()) {
    now = queue.dequeue();
    // win
    if (winTest(now)) return now;
    // if (++count > 400000) {
    //   console.log("========== BREAK ===========");
    //   console.log("Queue =", queue.items.length);
    //   current = now;
    //   break;
    // }

    // console.log(now.toString());

    // eslint-disable-next-line no-loop-func
    nextMoves(now).forEach((p) => {
      // console.log("moves", p);
      now.move(p);
      est = estimation2(now) + now.from.length;
      if (est <= max) queue.enqueue(new ABoardObj(now, est));
      now.back();
    });
  }

  // console.log("count", count);

  return current;
}

export function aStart() {
  let obj = generateStub();
  obj.board = "**A***B******DC "; // 4
  obj.board = "*BA**C***D***** "; // 6
  obj.board = "*A***B******D*C "; // 8
  obj.board = "A***CB*******D* "; // 10
  obj.board = "A*BD*********C* "; // 15
  obj.board = "*C***D**B*****A "; // 19
  obj.board = "**BCD*****A**** "; // 22
  obj.board = "D*****B**CA**** "; // 23
  obj.board = "DA*B*******C*** "; // ?
  obj.board = "DA*BC********** "; // ?

  console.log(obj.toString());
  // compare two
  console.log("============== START ================");
  let start = Date.now();

  // obj = a(obj);
  // console.log(`time = ${Date.now() - start} ms`);
  // console.log("============== STOP ================");
  // console.log(obj.toString());
  // console.log("============== START ================");
  // start = Date.now();

  obj = a2(obj);
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

// distance
export function distance(a: number, b: number): number {
  let x = Math.abs((a % 4) - (b % 4));
  let y = Math.abs(~~(a / 4) - ~~(b / 4));

  return x + y;
}

const wonSet = [
  [0, 3, 12, 0, 4, 8, 12, 0, 1, 2, 3],
  [5, 6, 9, 1, 5, 9, 13, 4, 5, 6, 7],
  [10, 9, 6, 2, 6, 10, 14, 8, 9, 10, 11],
  [15, 12, 3, 3, 7, 11, 15, 12, 13, 14, 15],
];

//
export function estimation2(obj: BoardObj) {
  let d = 0;
  let min = 24;

  for (let i = 0; i < 11; i++) {
    d = 0;
    for (let l = 0; l < 4; l++) {
      d += distance(obj.board.indexOf(obj.word[l]), wonSet[l][i]);
    }
    if (d < min) min = d;
  }

  return min;
}

// for levels over 15
// checked 12264, unchecked 23226
export function openFile3() {
  // level 15 in 5 steps, together 10 hours
  const level = 26;
  // console.log(`========= LEVEL ${level} ============`);
  const abc = "abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ";
  const index = 10; // next pack
  const pack = 50;

  // const part = allParts[index];
  console.log(`========= LEVEL ${level} ${abc[index]} ============`);

  const filename = `data_level_${level}_${abc[index]}.csv`;
  const type = "text/plain";

  let data = ["A,B,C,D,board start,board end,lvl,path"];
  let board = "";
  let set: BoardObj;
  let answer: BoardObj | null;
  let count = 0;
  // let checked = 0;
  let find = 0;
  let now: number;
  let start = Date.now();
  let total = start;

  // array with used sets
  const unres = unresolved.filter(
    (x) => !(arr24.includes(x) || arr25.includes(x))
  );

  console.log("no used =", unres.length - index * pack);

  for (let i = index * pack; i < unres.length; i++) {
    board = unres[i];
    // if (!setsUsed.includes(board)) {
    //   checked++;
    set = new BoardObj(board, "ABCD");
    answer = a2(set, level);
    count++;
    if (winTest(answer)) {
      find++;
      data.push(
        `\n${board.indexOf("A")},` +
          `${board.indexOf("B")},` +
          `${board.indexOf("C")},` +
          `${board.indexOf("D")},` +
          `"${board}","${answer.board}"` +
          `,${answer.from.length},${answer.from.toString()}`
      );
    }

    now = Math.floor((Date.now() - start) / 1000);
    start = Date.now();
    console.log(
      `${i}, ${board} , time = ${now} s, from = ${count}, find = ${find}`
    );
    if (count >= pack) break;
  }
  now = Math.floor((Date.now() - total) / 60000);
  console.log(`total time = ${now} min`);

  // save to file

  var file = new Blob(data, { type: type });
  //
  var a = document.createElement("a"),
    url = URL.createObjectURL(file);
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(function () {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 0);
}
