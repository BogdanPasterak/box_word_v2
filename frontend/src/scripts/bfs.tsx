import { BoardObj, NextMove } from "../models/board";
import { nextMoves, winTest } from "./scripts";

export function bfs(obj: BoardObj) {
  // starting element
  let move: NextMove = new NextMove(obj.copy(), -1);
  let list: NextMove[] = [move];
  let save: number = 5;

  while (list.length && save > 0) {
    save--;
    move = list.pop()!;

    if (winTest(move.obj)) {
      console.log("WIN - level 0");
    } else {
      // add next moves to list
      nextMoves(move.obj).forEach((direction) => {
        console.log(direction);
      });
    }
  }
}
