import { BoardObj } from "./board";

export class ABoardObj extends BoardObj {
  rating: number;

  constructor(obj: BoardObj, rating: number) {
    super(obj);
    this.rating = rating;
  }
}
