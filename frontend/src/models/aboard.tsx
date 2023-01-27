import { BoardObj } from "./board";

export class ABoardObj extends BoardObj {
  rating: number;

  constructor(obj: BoardObj, rating: number) {
    super(obj);
    this.rating = rating;
  }
}

ABoardObj.prototype.toString = function () {
  let s = this.board.substring(0, 4).split("").join(" ");
  s += `\tword  - ${this.word}\n`;
  s += this.board.substring(4, 8).split("").join(" ");
  s += `\tspace - ${this.pos}\n`;
  s += this.board.substring(8, 12).split("").join(" ");
  s += `\tlevel - ${this.from.length} ,  Rating = ${this.rating}\n`;
  s += this.board.substring(12).split("").join(" ");
  s += `\tfrom  - [${this.from.toString()}]`;

  return s;
};
