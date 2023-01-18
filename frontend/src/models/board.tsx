export interface Board {
  board: string; // 16 length
  word: string; // 4 length
  from: number[]; // array moves
  pos: number; // position space
}

export class BoardObj implements Board {
  board: string;
  word: string;
  from: number[];
  pos: number;

  constructor(obj: BoardObj);
  constructor(board: string, word: string);

  constructor(...arr: any[]) {
    if (arr[0] instanceof BoardObj) {
      this.board = arr[0].board;
      this.word = arr[0].word;
      this.from = [...arr[0].from];
      this.pos = arr[0].pos;
    } else {
      this.board = arr[0];
      this.word = arr[1];
      this.from = [];
      this.pos = 15;
    }
  }
}

export interface BoardObj {
  copy: () => BoardObj;
  move: (p: number) => BoardObj;
  back: () => BoardObj;
  toString: () => string;
}

BoardObj.prototype.copy = function () {
  return new BoardObj(this);
};

BoardObj.prototype.move = function (p: number) {
  let swap = this.board[p];

  // swap two element [space and element at index p]
  this.board = this.board
    .split("")
    .map((e, i) => (i === this.pos ? swap : i === p ? " " : e))
    .join("");

  // store move
  this.from.push(this.pos);
  // new positoion space
  this.pos = p;
  return this;
};

BoardObj.prototype.back = function () {
  if (this.from.length) {
    let old = this.from.pop() || -1;
    let swap = this.board[old];

    // swap two element [space and element at index p]
    this.board = this.board
      .split("")
      .map((e, i) => (i === old ? " " : i === this.pos ? swap : e))
      .join("");

    // new positoion space
    this.pos = old;
  }
  return this;
};

BoardObj.prototype.toString = function () {
  let s = this.board.substring(0, 4).split("").join(" ");
  s += `\tword  - ${this.word}\n`;
  s += this.board.substring(4, 8).split("").join(" ");
  s += `\tspace - ${this.pos}\n`;
  s += this.board.substring(8, 12).split("").join(" ");
  s += `\tlevel - ${this.from.length}\n`;
  s += this.board.substring(12).split("").join(" ");
  s += `\tfrom  - [${this.from.toString()}]`;

  return s;
};
