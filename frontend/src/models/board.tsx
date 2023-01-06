export interface Board {
  board: string; // 16 length
  word: string; // 4 length
  to: number[];
}

export class BoardObj implements Board {
  board: string;
  word: string;
  to: number[];

  constructor(board: string, word: string) {
    this.board = board;
    this.word = word;
    this.to = [];
  }
}
