import { solutions } from "../assets/solutions";
import { words } from "../assets/words";

export class Game {
  word: string = "";
  usedWords: string[] = [];
  level: number = 5;
  usedLevels: string[][] = Array.from(Array(solutions.length), () => []);
  person: string;
  board = "";
  end = false;
  time: number = new Date().getTime();
  timePause = 0;
  display = "00:00";
  sec = 0;
  milisec = "";
  run = false;
  interval: NodeJS.Timer | undefined;
  pause = false;
  win = false;

  constructor() {
    // Random word
    this.getRandomWord();
    // Random solution
    this.getRandomBoard();
    // this.word = word ? word : "WORD";
    this.person = "Welcome";
  }

  newLevel(l: number) {
    this.level = l;
    this.getRandomWord();
    this.getRandomBoard();
    this.end = false;
    this.time = new Date().getTime();
    this.run = false;
    clearInterval(this.interval);
    this.sec = 0;
    this.display = "00:00";
    this.milisec = "";
    this.win = false;
    return this;
  }

  tickDisplay(): string {
    this.sec++;
    let h = Math.floor(this.sec / 3600);
    let str = h ? h + ":" : "";
    let min = Math.floor((this.sec - h * 3600) / 60);
    str += min < 10 ? "0" + min + ":" : min + ":";
    let s = this.sec % 60;
    str += s < 10 ? "0" + s : s.toString();
    this.display = str;

    return str;
  }

  private getRandomWord() {
    // if les than 10 words awaliable remove 2
    if (words.length - 10 < this.usedWords.length) {
      this.usedWords.shift();
      this.usedWords.shift();
    }
    // not used words
    let unusedWords = words.filter((w) => this.usedWords.indexOf(w) === -1);
    // random word
    let w = unusedWords[Math.floor(Math.random() * unusedWords.length)];
    this.usedWords.push(w);
    this.word = w.toUpperCase();
  }

  private getRandomBoard() {
    // if used set is more than 9/10 => minus 2 older
    if (
      solutions[this.level].length / 10 <=
      this.usedLevels[this.level].length / 9
    ) {
      this.usedLevels[this.level].shift();
      this.usedLevels[this.level].shift();
    }
    // filter used solution
    let unused = solutions[this.level].filter(
      (sol) => this.usedLevels[this.level].indexOf(sol) === -1
    );
    // random word
    this.board = unused[Math.floor(Math.random() * unused.length)];
    // add to used
    // console.log(this.level, this.board);

    this.usedLevels[this.level].push(this.board);
  }

  updateGame(w: string, l: number): Game {
    this.word = w;
    this.level = l;
    return this;
  }
}
