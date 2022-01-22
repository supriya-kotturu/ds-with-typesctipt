import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    this.data[leftIndex] = this.data[leftIndex] + this.data[rightIndex];
    this.data[rightIndex] = this.data[leftIndex] - this.data[rightIndex];
    this.data[leftIndex] = this.data[leftIndex] - this.data[rightIndex];
  }

  get length(): number {
    return this.data.length;
  }
}
