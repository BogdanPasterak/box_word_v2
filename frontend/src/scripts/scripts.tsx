import { Board, BoardObj } from "../models/board";
import { Expand } from "../models/expand";

export function print(s: string) {
  console.log("Bogdan", s);
}

// generete random set with letters A,B,C,D
export function generateStub(b = "*************** "): BoardObj {
  let temp: string[] = b.split("");
  // console.log(b);

  if (b === "*************** ") {
    let index = 15;
    //random position of 4 letters
    ["A", "B", "C", "D"].forEach((e) => {
      do {
        index = Math.floor(Math.random() * 15);
      } while (!(temp[index] === "*"));

      temp[index] = e;
    });
  }
  // connect to string add word and return
  return new BoardObj(temp.join(""), "ABCD");
}

// generete random set with letters A,B,C,D
export function generateBoard(b: string, w: string): BoardObj {
  let temp: string[] = b.split("");
  // console.log(b);

  // word in space ABCD
  let field = [
    temp.indexOf("A"),
    temp.indexOf("B"),
    temp.indexOf("C"),
    temp.indexOf("D"),
  ];
  field.forEach((f, i) => (temp[f] = w[i]));

  // fill stars
  let letters = [
    ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      .split("")
      .filter((x) => !(x === w[0] || x === w[1] || x === w[2] || x === w[3])),
  ];
  temp.forEach((l, i) => {
    if (l === "*") temp[i] = letters[Math.floor(Math.random() * 22)];
  });

  // let index = 15;
  // //random position of 4 letters
  // w.split("").forEach((e) => {
  //   do {
  //     index = Math.floor(Math.random() * 15);
  //   } while (!(temp[index] === "*"));

  //   temp[index] = e;
  // });

  // connect to string add word and return
  return new BoardObj(temp.join(""), w);
}

// test if board match word
export function winTest(obj: Board | Expand): boolean {
  const b = obj instanceof Expand ? obj.getView() : obj.board;
  const word = obj.word;

  // first position top left corner - 3 posible
  if (b[0] === word[0]) {
    if (
      (b[1] === word[1] && b[2] === word[2] && b[3] === word[3]) ||
      (b[4] === word[1] && b[8] === word[2] && b[12] === word[3]) ||
      (b[5] === word[1] && b[10] === word[2] && b[15] === word[3])
    )
      return true;
  } else if (b[3] === word[0]) {
    // top right corner - 2 posible down and cross
    if (
      (b[7] === word[1] && b[11] === word[2] && b[15] === word[3]) ||
      (b[6] === word[1] && b[9] === word[2] && b[12] === word[3])
    )
      return true;
  } else if (b[12] === word[0]) {
    // bottom left corner - 2 posible right and cross
    if (
      (b[13] === word[1] && b[14] === word[2] && b[15] === word[3]) ||
      (b[9] === word[1] && b[6] === word[2] && b[3] === word[3])
    )
      return true;
  } else if (b[4] === word[0]) {
    // 2-nd horizontal
    if (b[5] === word[1] && b[6] === word[2] && b[7] === word[3]) return true;
  } else if (b[8] === word[0]) {
    // 3-th horizontal
    if (b[9] === word[1] && b[10] === word[2] && b[11] === word[3]) return true;
  } else if (b[1] === word[0]) {
    // 2-nd vertical
    if (b[5] === word[1] && b[9] === word[2] && b[13] === word[3]) return true;
  } else if (b[2] === word[0]) {
    // 3-th vertical
    if (b[6] === word[1] && b[10] === word[2] && b[14] === word[3]) return true;
  }
  return false;
}

export function nextMoves(obj: Board): number[] {
  let next = [];

  // add up to 4 neighbors
  if (obj.pos > 3) next.push(obj.pos - 4);
  if (obj.pos % 4 > 0) next.push(obj.pos - 1);
  if (obj.pos % 4 < 3) next.push(obj.pos + 1);
  if (obj.pos < 12) next.push(obj.pos + 4);

  // minus last one move (no back)
  if (obj.from.length) {
    let index = next.indexOf(obj.from[obj.from.length - 1]);
    if (index > -1) next.splice(index, 1);
  }
  return next;
}

export function counting() {
  let counter = 0;

  for (let a = 0; a < 15; a++) {
    for (let b = 0; b < 15; b++) {
      if (a === b) continue;
      for (let c = 0; c < 15; c++) {
        if (a === c || b === c) continue;
        for (let d = 0; d < 15; d++) {
          if (a === d || b === d || c === d) continue;
          counter++;
        }
      }
    }
  }
  console.log(counter);
}
