import { render } from "@testing-library/react";
import { generateStub, winTest } from "../scripts/scripts";

describe("Testing generateStub", () => {
  const abcd = ["A", "B", "C", "D"];
  let answer = generateStub();

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
    answer = winTest(w, word);
    test(`should be win "${w}"`, () => {
      expect(answer).toBeTruthy();
    });
  });
});
