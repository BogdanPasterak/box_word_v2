export class Game {
  word: string;
  words: string[];
  level: number;
  usedLevels: number[][];
  person: string;

  constructor(word: string, level: number) {
    this.word = word;
    this.level = level;
    this.person = "Welcome";
    this.words = [];
    this.usedLevels = Array(27).fill([]);
  }
}
