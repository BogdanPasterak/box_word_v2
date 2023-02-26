import { BoardObj } from "./board";

export class Expand extends BoardObj {
  bg: string[];
  order: number[];

  constructor(obj: BoardObj, images: string[], order?: number[]) {
    super(obj);
    this.bg = images;
    if (order) this.order = order;
    else this.order = Array.from(Array(16).keys());
  }
}

export interface Expand {
  copy: () => Expand;
  move: (p: number) => Expand;
  back: () => Expand;
  toString: () => string;
}

Expand.prototype.copy = function () {
  return new Expand(new BoardObj(this), [...this.bg], [...this.order]);
};

Expand.prototype.move = function (p: number) {
  // let swap = this.board[p];

  // // swap two element [space and element at index p]
  // this.board = this.board
  //   .split("")
  //   .map((e, i) => (i === this.pos ? swap : i === p ? " " : e))
  //   .join("");

  // store move
  this.from.push(this.pos);

  // swap backgrount number
  let space = this.order[this.pos];
  this.order[this.pos] = this.order[p];
  this.order[p] = space;

  // new positoion space
  this.pos = p;

  return this;
};

Expand.prototype.back = function () {
  if (this.from.length) {
    let old = this.from.pop() || -1;
    // let swap = this.board[old];

    // // swap two element [space and element at index p]
    // this.board = this.board
    //   .split("")
    //   .map((e, i) => (i === old ? " " : i === this.pos ? swap : e))
    //   .join("");

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
  let s = this.order[0] + " " + this.order[1];
  s += " " + this.order[2] + " " + this.order[3];
  s += `\tword  - ${this.word}\n`;
  s += this.order[4] + " " + this.order[5];
  s += " " + this.order[6] + " " + this.order[7];
  s += `\tspace - ${this.pos}\n`;
  s += this.order[8] + " " + this.order[9];
  s += " " + this.order[10] + " " + this.order[11];
  s += `\tlevel - ${this.from.length}\n`;
  s += this.order[12] + " " + this.order[13];
  s += " " + this.order[14] + " " + this.order[15];
  s += `\tfrom  - [${this.from.toString()}]`;
  s += `\nbg - [${this.bg[15]}]`;
  s += `\norder - [${this.order.toString()}]`;

  return s;
};
