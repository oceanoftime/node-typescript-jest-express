import Data from '../model/data';
import { IRepository, IPredicate, IMockDatabase } from './interface';

export default class FakeRepository implements IRepository<Data>, IMockDatabase<Data> {
  database: Array<Data>;

  constructor() {
    this.database = [];
  }

  index(): Array<Data> {
    return this.database;
  }

  findById(id: string): Data | null {
    let item: Data | null = null;
    const result = this.database.find((x) => x.id === id);
    if (result) {
      item = result;
    }
    return item;
  }

  search(predicate: IPredicate): Array<Data> {
    return this.database.filter((x) => predicate(x));
  }

  create(data: Data): void {
    this.database.push(data);
  }

  update(data: Data): void {
    this.database = this.database.map((x) => {
      let tmp: Data = x;
      if (x.id === data.id) {
        tmp = new Data(data.id, data.value);
      }
      return tmp;
    });
  }

  // eslint-disable-next-line class-methods-use-this
  delete(id: Data): void {
    throw new Error('Not implemented.');
  }

  seed(seedlings: Array<Data>): void {
    seedlings.forEach((data) => {
      this.database.push(data);
    });
  }
}
