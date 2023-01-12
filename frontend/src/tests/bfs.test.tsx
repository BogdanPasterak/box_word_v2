import { BoardObj } from "../models/board";
import { bfs } from "../scripts/bfs";

describe("Testing BFS algorythm", () => {
  const obj = new BoardObj("********ABCD*** ", "ABCD");
  const copy = obj.copy();
  let result: BoardObj;

  test("should be level 0", () => {
    result = bfs(copy);
    expect(result.from.length).toBe(0);
  });

  test("should be level 1", () => {
    copy.move(11);
    copy.from = [];
    result = bfs(copy);
    expect(result.from.length).toBe(1);
  });

  test("should be level 2", () => {
    copy.move(10);
    copy.from = [];
    result = bfs(copy);
    expect(result.from.length).toBe(2);
  });

  test("should be level 3", () => {
    copy.move(14);
    copy.from = [];
    result = bfs(copy);
    expect(result.from.length).toBe(3);
  });
});
