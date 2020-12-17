import { IData } from './interface';

export default class Data implements IData {
  id: string;
  value: string;

  constructor(id: string, value: string) {
    if (!id || !value) {
      throw new Error('Invalid Data object.');
    }
    this.id = id;
    this.value = value;
  }

  toString(): string {
    return `id: ${this.id}, value: ${this.value}`;
  }
}
