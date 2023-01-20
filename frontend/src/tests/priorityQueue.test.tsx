import { ABoardObj } from "../models/aboard";
import { BoardObj } from "../models/board";
import { PriorityQueue } from "../models/priorityQueue";

describe("Testing Priority Queue", () => {
  const aObj10 = new ABoardObj(new BoardObj("10******ABCD*** ", "ABCD"), 10);
  const queue = new PriorityQueue(aObj10);

  test("should be same object, and queue empty", () => {
    expect(aObj10).toBe(queue.dequeue());
    expect(queue.isEmpty()).toBe(true);
  });

  // test("should be level 1", () => {
  //   copy.move(11);
  //   copy.from = [];
  //   result = bfs(copy);
  //   expect(result.from.length).toBe(1);
  // });

  // test("should be level 2", () => {
  //   copy.move(10);
  //   copy.from = [];
  //   result = bfs(copy);
  //   expect(result.from.length).toBe(2);
  // });

  // test("should be level 3", () => {
  //   copy.move(14);
  //   copy.from = [];
  //   result = bfs(copy);
  //   expect(result.from.length).toBe(3);
  // });
});
