import { ABoardObj } from "../models/aboard";
import { BoardObj } from "../models/board";
import { PriorityQueue } from "../models/priorityQueue";

describe("Testing Priority Queue", () => {
  const aObj10 = new ABoardObj(new BoardObj("10******ABCD*** ", "ABCD"), 10);
  const aObj10a = new ABoardObj(new BoardObj("10a*****ABCD*** ", "ABCD"), 10);
  const aObj20 = new ABoardObj(new BoardObj("20******ABCD*** ", "ABCD"), 20);
  const aObj5 = new ABoardObj(new BoardObj("5*******ABCD*** ", "ABCD"), 5);
  const queue = new PriorityQueue(aObj10);

  test("should be same object, and queue empty", () => {
    expect(aObj10).toBe(queue.dequeue());
    expect(queue.isEmpty()).toBe(true);
  });

  test("should be same object, and queue not empty", () => {
    queue.enqueue(aObj10);

    expect(aObj10).toBe(queue.items[0]);
    expect(queue.isEmpty()).toBe(false);
  });

  test("same priority should be added at end", () => {
    queue.enqueue(aObj10a);

    expect(aObj10).toBe(queue.items[0]);
    expect(aObj10a).toBe(queue.items[1]);
  });

  test("should be added at front", () => {
    queue.enqueue(aObj20);

    expect(aObj20).toBe(queue.items[0]);
  });

  test("should be added at end", () => {
    queue.enqueue(aObj5);

    expect(aObj5).toBe(queue.items[3]);
  });
});
