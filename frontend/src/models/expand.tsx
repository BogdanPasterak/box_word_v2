import { BoardObj } from "./board";

export class Expand extends BoardObj {
  bg: string[];
  order: number[];
  forward: number[];
  winPos: number;

  constructor(
    obj: BoardObj,
    images: string[],
    order?: number[],
    forward?: number[],
    winPos?: number
  ) {
    super(obj);
    this.bg = images;
    if (order) this.order = order;
    else this.order = Array.from(Array(16).keys());
    if (forward) this.forward = forward;
    else this.forward = [];
    if (winPos) this.winPos = winPos;
    else this.winPos = 0;
  }
}

export interface Expand {
  copy: () => Expand;
  move: (p: number) => Expand;
  back: () => Expand;
  ahead: () => number;
  toString: () => string;
  getView: () => string;
}

Expand.prototype.copy = function () {
  return new Expand(
    new BoardObj(this),
    [...this.bg],
    [...this.order],
    [...this.forward],
    this.winPos
  );
};

Expand.prototype.move = function (p: number) {
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

    // store for forward
    this.forward.push(this.pos);

    // swap backgrount number
    let space = this.order[this.pos];
    this.order[this.pos] = this.order[old];
    this.order[old] = space;

    // new positoion space
    this.pos = old;
  }
  return this;
};

Expand.prototype.ahead = function () {
  return this.forward.pop() || -1;
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
  s += `\nfoward - [${this.forward.toString()}]`;

  return s;
};

Expand.prototype.getView = function () {
  let s = this.board.split("");
  let size = this.from.length - 1;

  for (let i = 0; i <= size; i++) {
    if (i === size) {
      s[this.from[i]] = s[this.pos];
      s[this.pos] = " ";
    } else {
      s[this.from[i]] = s[this.from[i + 1]];
      s[this.from[i + 1]] = " ";
    }
  }

  return s.join("");
};
