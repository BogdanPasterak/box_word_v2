import { words } from "../assets/words";

export class Game {
  word: string;
  words: string[];
  level: number;
  usedLevels: number[][];
  person: string;

  constructor();
  constructor(word: string, level: number);
  constructor(word?: string, level?: number) {
    if (word) {
      this.word = word;
    } else {
      this.word = words[0].toUpperCase();
    }
    // this.word = word ? word : "WORD";
    this.level = level ? level : 5;
    this.person = "Welcome";
    this.words = [];
    this.usedLevels = Array(27).fill([]);
  }

  updateGame(w: string, l: number): Game {
    this.word = w;
    this.level = l;
    return this;
  }
}
