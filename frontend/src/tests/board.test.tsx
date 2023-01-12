import { BoardObj } from "../models/board";
import { generateStub, nextMoves, winTest } from "../scripts/scripts";

describe("Testing copy board object", () => {
  const obj = generateStub();
  obj.move(11);
  obj.move(10);
  const copy = obj.copy();

  test("should be same", () => {
    expect(obj.board).toBe(copy.board);
    expect(obj.word).toBe(copy.word);
    expect(obj.pos).toBe(copy.pos);
    expect(obj.from).toEqual(copy.from);
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

describe("Testing back function object", () => {
  const obj = generateStub();

  test("should be move [D]", () => {
    obj.board = "********ABCD*** ";
    obj.move(11);
    obj.move(10);
    expect(obj.board).toBe("********AB C***D");

    obj.back(); // first
    expect(obj.board).toBe("********ABC ***D");

    obj.back(); // secound
    expect(obj.board).toBe("********ABCD*** ");

    // no change (0 in from list)
    obj.back();
    expect(obj.board).toBe("********ABCD*** ");
    expect(obj.pos).toBe(15);
    expect(obj.from).toEqual([]);
  });
});
