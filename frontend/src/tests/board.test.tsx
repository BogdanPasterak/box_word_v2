import { BoardObj } from "../models/board";
import { generateStub, nextMoves, winTest } from "../scripts/scripts";

describe("Testing copy board object", () => {
  const obj = generateStub();
  obj.move(11);
  obj.move(10);
  const copy = obj.copy();

  test("should be same", () => {
    expect(obj).toEqual(copy);
  });
});

describe("Testing move function object", () => {
  const obj = generateStub();

  test("should be move [D]", () => {
    obj.board = "********ABCD*** ";

    obj.move(11);
    expect(obj.board).toBe("********ABC ***D");

    obj.move(10);
    expect(obj.board).toBe("********AB C***D");

    obj.move(14);
    expect(obj.board).toBe("********AB*C** D");

    obj.move(15);
    expect(obj.board).toBe("********AB*C**D ");

    expect(obj.pos).toBe(15);
    expect(obj.from).toEqual([15, 11, 10, 14]);
  });
});
