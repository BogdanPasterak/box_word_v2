import { BoardObj } from "../models/board";
import { generateStub, nextMoves, winTest } from "./scripts";
import { arr } from "./arr_0_16";
import { arr17 } from "./arr_17";
import { arr18 } from "./arr_18";
import { arr19 } from "./arr_19";
import { arr20 } from "./arr_20";
import { arr21 } from "./arr_21";
import { arr22 } from "./arr_22";
import { arr23 } from "./arr_23";
import { arr24 } from "./arr_24";
import { arr25 } from "./arr_25";
import { arr26 } from "./arr_26";
import { arr27 } from "./arr_27";
import { arr28 } from "./arr_28";
import { arr29 } from "./arr_29";

export function dfs(obj: BoardObj): BoardObj {
  // starting element
  let current: BoardObj = obj.copy();
  let stack: BoardObj[];
  let start = Date.now();

  // deeps level limit
  for (let l = 0; l < 26; l++) {
    stack = [obj.copy()];
    while (stack.length) {
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
    if (winTest(current)) {
      break;
    }
  }

  return current;
}

export function dfsStart() {
  let obj = generateStub();
  obj.board = "**D*******C**BA ";
  // obj.board = "*C***D**B*****A "; // 19
  obj.board = "D*****B**CA**** "; // 23

  console.log("============== START ================");
  console.log(obj.toString());
  let start = Date.now();

  obj = dfs(obj);

  console.log(`time = ${Date.now() - start} ms`);
  console.log("============== STOP ================");
  console.log(obj.toString());
}

// use DFS to find answer on level
export function dfsLevels(obj: BoardObj, level: number): BoardObj | null {
  let stack: BoardObj[];
  let current: BoardObj = obj;

  // console.log("============== START ================");
  // console.log(obj.toString());

  // deeps level limit
  // search for exacly level
  // for (let l = 0; l <= level; l++) {
  // if (l > 15) console.log(`------- Level ${l} ---------`);
  // steps.push({ index: l, stop: Date.now() });

  stack = [obj.copy()];
  while (stack.length) {
    // log for show work
    // if (!(++count % 5000000)) console.log(Date.now() - start);
    current = stack.pop()!;
    // if over deeps
    // if (current.from.length > l) continue;
    // if on deep test off win (before was detected in previose one loop)
    if (current.from.length === level) {
      if (winTest(current)) return current;
    } else {
      // eslint-disable-next-line no-loop-func
      nextMoves(current).forEach((direction) => {
        stack.push(current.copy().move(direction));
      });
    }
  }
  return null;
  // }

  // if (winTest(obj)) console.log("=============  W  I  N  ================");
  // else console.log("============== STOP ================");
  // console.log(obj.toString());
  // return null;
}

// for levels over 15
// checked 12264, unchecked 23226
export function openFile2() {
  // level 15 in 5 steps, together 10 hours
  const level = 23;
  // console.log(`========= LEVEL ${level} ============`);
  const abc = "abcdefghijklmno";
  const index = 14;

  // const part = allParts[index];
  console.log(`========= LEVEL ${level} ${abc[index]} ============`);

  const filename = `data_level_${level}_${abc[index]}.csv`;
  const type = "text/plain";

  let data = ["A,B,C,D,board start,board end,lvl,path"];
  let board = "";
  let set: BoardObj;
  let answer: BoardObj | null;
  let count = 0;
  let checked = 0;
  let find = 0;
  let now: number;
  let start = Date.now();

  // array with used sets
  const setsUsed = arr
    .concat(arr17)
    .concat(arr18)
    .concat(arr19)
    .concat(arr20)
    .concat(arr21)
    .concat(arr22)
    .sort();
  console.log("used =", setsUsed.length);

  for (let a = index; a <= index; a++) {
    for (let b = 0; b < 15; b++) {
      checked = find = 0;
      if (b === a) continue;
      for (let c = 0; c < 15; c++) {
        if (c === a || c === b) continue;
        for (let d = 0; d < 15; d++) {
          if (d === a || d === b || d === c) continue;
          board = "";
          for (let i = 0; i < 15; i++) {
            if (i === a) board += "A";
            else if (i === b) board += "B";
            else if (i === c) board += "C";
            else if (i === d) board += "D";
            else board += "*";
          }
          board += " ";
          if (!setsUsed.includes(board)) {
            checked++;
            set = new BoardObj(board, "ABCD");
            answer = dfsLevels(set, level);
            if (answer) {
              count++;
              find++;
              data.push(
                `\n${a},${b},${c},${d},"${board}","${answer.board}"` +
                  `,${answer.from.length},${answer.from.toString()}`
              );
              // } else {
              //   console.log("OVER 27");
            }
          }
        }
      }
      now = Math.floor((Date.now() - start) / 60000);
      console.log(
        `a,b = ${a}, ${b}, time = ${now}, from = ${checked}, find = ${find}`
      );
    }
    console.log(`a = ${a} , count = ${count}`);
  }

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

export function openFile() {
  // level 15 in 5 steps, together 10 hours
  const level = 15;
  console.log(`========= LEVEL ${level} ============`);

  const filename = `data_level_${level}.csv`;
  const type = "text/plain";

  let data = ["A,B,C,D,board start,board end,lvl,path"];
  let board = "";
  let set: BoardObj;
  let answer: BoardObj | null;
  let count = 0;

  for (let a = 12; a < 15; a++) {
    for (let b = 0; b < 15; b++) {
      if (b === a) continue;
      console.log(`a, b = ${a}, ${b}`);
      for (let c = 0; c < 15; c++) {
        if (c === a || c === b) continue;
        for (let d = 0; d < 15; d++) {
          if (d === a || d === b || d === c) continue;
          board = "";
          for (let i = 0; i < 15; i++) {
            if (i === a) board += "A";
            else if (i === b) board += "B";
            else if (i === c) board += "C";
            else if (i === d) board += "D";
            else board += "*";
          }
          board += " ";
          set = new BoardObj(board, "ABCD");
          answer = dfsLevels(set, level);
          if (answer) {
            count++;
            // console.log("--- set ---");
            // console.log(set.toString());
            // console.log(answer.toString());
            data.push(
              `\n${a},${b},${c},${d},"${board}","${answer.board}"` +
                `,${level},${answer.from.toString()}`
            );
          }
          // if (a === 0 && b === 1 && c === 2 && d === 3) {
          //   data += `\n${a},${b},${c},${d},Bogdan`;
          // }
        }
      }
    }
    console.log(`count = ${count}`);
  }

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

export function unresolved() {
  // const part = allParts[index];
  console.log(`========= generate unresolved sets ============`);

  const filename = `unresolved.tsx`;
  const type = "text/plain";

  let data = ["export const unresolved: string[] = [\n"];
  let board = "";
  // let set: BoardObj;
  // let answer: BoardObj | null;
  let count = 0;
  // let checked = 0;
  // let find = 0;
  // let now: number;
  // let start = Date.now();

  // array with used sets
  const setsUsed = arr
    .concat(arr17)
    .concat(arr18)
    .concat(arr19)
    .concat(arr20)
    .concat(arr21)
    .concat(arr22)
    .concat(arr23)
    .concat(arr24)
    .concat(arr25)
    .concat(arr26)
    .concat(arr27)
    .concat(arr28)
    .concat(arr29)
    .sort();
  console.log("used =", setsUsed.length);

  for (let a = 0; a < 15; a++) {
    for (let b = 0; b < 15; b++) {
      if (b === a) continue;
      for (let c = 0; c < 15; c++) {
        if (c === a || c === b) continue;
        for (let d = 0; d < 15; d++) {
          if (d === a || d === b || d === c) continue;
          board = "";
          for (let i = 0; i < 15; i++) {
            if (i === a) board += "A";
            else if (i === b) board += "B";
            else if (i === c) board += "C";
            else if (i === d) board += "D";
            else board += "*";
          }
          board += " ";
          if (!setsUsed.includes(board)) {
            data.push(`"${board}",\n`);
            count++;
          }
        }
      }
    }
  }
  console.log("no used =", count);

  data.push("];");

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

export function dfsTest(set: string) {
  let obj = generateStub(set);

  console.log("============== START ================");
  console.log("==============  DFS  ================");
  console.log(obj.toString());
  let start = Date.now();

  obj = dfs(obj);

  console.log(
    "Time -",
    new Date(Date.now() - start).toJSON().substring(11, 23),
    " h:min:sec.milisec"
  );
  console.log("============== STOP ================");
  console.log(obj.toString());
}
