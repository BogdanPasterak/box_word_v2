import { BoardObj } from "../models/board";
import { bfs } from "../scripts/bfs";

describe("Testing BFS algorythm", () => {
  const obj = new BoardObj("***********DABC ", "ABCD");
  const copy = obj.copy();

  test("should be same", () => {
    bfs(copy);
    expect(obj).toEqual(copy);
  });
});
