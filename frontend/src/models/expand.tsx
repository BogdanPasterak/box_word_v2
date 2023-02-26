import { BoardObj } from "./board";

export class Expand extends BoardObj {
  bg: number[];

  constructor(obj: BoardObj) {
    super(obj);
    this.bg = Array.from(Array(16).keys());
  }
}

export interface Expand {
  copy: () => Expand;
  move: (p: number) => Expand;
  back: () => Expand;
  toString: () => string;
}

Expand.prototype.copy = function () {
  return new Expand(this);
};

Expand.prototype.move = function (p: number) {
  let swap = this.board[p];

  // swap two element [space and element at index p]
  this.board = this.board
    .split("")
    .map((e, i) => (i === this.pos ? swap : i === p ? " " : e))
    .join("");

  // store move
  this.from.push(this.pos);

  // swap backgrount number
  let space = this.bg[this.pos];
  this.bg[this.pos] = this.bg[p];
  this.bg[p] = space;

  // new positoion space
  this.pos = p;

  return this;
};

Expand.prototype.back = function () {
  if (this.from.length) {
    let old = this.from.pop() || -1;
    let swap = this.board[old];

    // swap two element [space and element at index p]
    this.board = this.board
      .split("")
      .map((e, i) => (i === old ? " " : i === this.pos ? swap : e))
      .join("");

    // swap backgrount number
    let space = this.bg[this.pos];
    this.bg[this.pos] = this.bg[old];
    this.bg[old] = space;

    // new positoion space
    this.pos = old;
  }
  return this;
};

Expand.prototype.toString = function () {
  let s = this.board.substring(0, 4).split("").join(" ");
  s += `\tword  - ${this.word}\n`;
  s += this.board.substring(4, 8).split("").join(" ");
  s += `\tspace - ${this.pos}\n`;
  s += this.board.substring(8, 12).split("").join(" ");
  s += `\tlevel - ${this.from.length}\n`;
  s += this.board.substring(12).split("").join(" ");
  s += `\tfrom  - [${this.from.toString()}]`;
  s += `\nbg - [${this.bg.toString()}]`;

  return s;
};
