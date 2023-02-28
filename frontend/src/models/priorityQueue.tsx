import { ABoardObj } from "./aboard";

export class PriorityQueue {
  items: ABoardObj[];

  constructor(item: ABoardObj) {
    if (item) this.items = [item];
    else this.items = [];
  }
}

export interface PriorityQueue {
  enqueue: (item: ABoardObj) => void;
  dequeue: () => ABoardObj;
  isEmpty: () => boolean;
  toString: () => string;
}

PriorityQueue.prototype.enqueue = function (item: ABoardObj) {
  let size = this.items.length - 1;

  // experimental queue reduction
  if (item.rating > 20) return;

  // empty queue
  if (size < 0) this.items.push(item);
  // if last one is biger, add to end
  else if (this.items[size].rating >= item.rating) this.items.push(item);
  // set on sorted position
  else
    while (size >= 0) {
      size--;
      // bigest add to front
      if (size === -1) this.items.unshift(item);
      else if (this.items[size].rating >= item.rating) {
        this.items.splice(++size, 0, item);
        break;
      }
    }
};

PriorityQueue.prototype.dequeue = function () {
  return this.items.pop()!;
};

PriorityQueue.prototype.isEmpty = function () {
  return this.items.length === 0;
};

PriorityQueue.prototype.toString = function () {
  let s = `PriorityQueue size = ${this.items.length}`;

  this.items.forEach((e) => {
    s += `\n[rating = ${e.rating},  board = "${e.board}"]`;
  });

  return s;
};
