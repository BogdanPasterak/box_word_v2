export interface Board {
  board: string; // 16 length
  word: string; // 4 length
  from: number[]; // array moves
  pos: number; // position space
}

export class BoardObj implements Board {
  board: string;
  word: string;
  from: number[];
  pos: number;

  constructor(board: string, word: string) {
    this.board = board;
    this.word = word;
    this.from = [];
    this.pos = 15;
  }

  copy(): Board {
    let c = new BoardObj(this.board, this.word);
    c.pos = this.pos;
    c.from = [...this.from];

    return c;
  }

  move(p: number) {
    let swap = this.board[p];

    // swap two element [space and element at index p]
    this.board = this.board
      .split("")
      .map((e, i) => (i === this.pos ? swap : i === p ? " " : e))
      .join("");

    // store move
    this.from.push(this.pos);
    // new positoion space
    this.pos = p;
  }

  back() {
    if (this.from.length) {
      let old = this.from.pop() || -1;
      let swap = this.board[this.pos];

      // swap two element [space and element at index p]
      this.board = this.board
        .split("")
        .map((e, i) => (i === old ? swap : i === this.pos ? " " : e))
        .join("");

      // new positoion space
      this.pos = old;
    }
  }
}
