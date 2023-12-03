import { distance } from "../scripts/astar";

describe("Testing function a star", () => {
  // const obj = new BoardObj("********ABCD*** ", "ABCD");
  // const copy = obj.copy();
  // let result: BoardObj;

  test("distance from 1 to 10", () => {
    let a = 1;
    let b = 10;
    expect(distance(a, b)).toBe(3);
  });

  test("distance from 10 to 1", () => {
    let a = 10;
    let b = 1;
    expect(distance(a, b)).toBe(3);
  });

  test("distance from 3 to 12", () => {
    let a = 3;
    let b = 12;
    expect(distance(a, b)).toBe(6);
  });

  test("distance from 13 to 6", () => {
    let a = 13;
    let b = 6;
    expect(distance(a, b)).toBe(3);
  });
});
