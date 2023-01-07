import { render } from "@testing-library/react";
import { BoardObj } from "../models/board";
import { generateStub, nextMoves, winTest } from "../scripts/scripts";

describe("Testing generateStub", () => {
  const obj = generateStub();
  const abcd = obj.word.split("");
  const answer = obj.board;

  test(`should be string "${answer}"`, () => {
    expect(typeof answer).toBe("string");
  });

  test("length should be 16", () => {
    expect(answer.length).toBe(16);
  });

  test("last one should be [space]", () => {
    expect(answer[15]).toBe(" ");
  });

  // test each letter
  abcd.forEach((letter) => {
    test(`should contain one [${letter}]`, () => {
      // contain first
      expect(answer.includes(letter)).toBe(true);
      // no next
      let indexNext = answer.indexOf(letter) + 1;
      expect(answer.includes(letter, indexNext)).toBe(false);
    });
  });

  for (let i = 0; i < 15; i++) {
    if (!abcd.includes(answer[i]))
      test(`at index (${i}) should be [*]`, () => {
        expect(answer[i]).toBe("*");
      });
  }
});

describe("Testing winTest", () => {
  // 11 wining sets
  const win = [
    "ABCD*********** ",
    "A***B***C***D** ",
    "A****B****C*** D",
    "***A** B***C***D",
    "***A**B**C**D** ",
    "***** ******ABCD",
    "***D**C**B**A** ",
    "****ABCD* ******",
    "********ABCD*** ",
    "*A***B***C***D* ",
    "**A***B***C***D ",
  ];
  const word = "ABCD";
  let answer: boolean;

  // test win set
  win.forEach((w) => {
    answer = winTest(new BoardObj(w, word));
    test(`should be win "${w}"`, () => {
      expect(answer).toBeTruthy();
    });
  });
});

describe("Testing nextMoves", () => {
  const moves = [
    [1, 4],
    [0, 2, 5],
    [1, 3, 6],
    [2, 7],
    [0, 5, 8],
    [1, 4, 6, 9],
    [2, 5, 7, 10],
    [3, 6, 11],
    [4, 9, 12],
    [5, 8, 10, 13],
    [6, 9, 11, 14],
    [7, 10, 15],
    [8, 13],
    [9, 12, 14],
    [10, 13, 15],
    [11, 14],
  ];
  const back = [
    { p: 1, m: [4, 6, 9] },
    { p: 4, m: [1, 6, 9] },
    { p: 6, m: [1, 4, 9] },
    { p: 9, m: [1, 4, 6] },
  ];
  const obj = new BoardObj("ABCD*********** ", "ABCD");

  // moves without back (all neighbors)
  moves.forEach((m, index) => {
    test(`should be [${m.toString()}] and index = ${index}`, () => {
      obj.pos = index;
      expect(nextMoves(obj)).toEqual(m);
    });
  });

  // position 5 (4 neighbors) with back from all side
  back.forEach((o) => {
    test(`should be [1, 4, 6, 9] without [${o.p}]`, () => {
      obj.pos = 5;
      obj.from.push(o.p);
      expect(nextMoves(obj)).toEqual(o.m);
    });
  });
});
