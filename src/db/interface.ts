// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IPredicate = (data: any) => boolean;

export interface IRepository<T> {
  index(): Array<T>;
  findById(id: string): T | null;
  search(predicate: IPredicate): Array<T>;
  create(data: T): void;
  update(data: T): void;
  delete(data: T): void;
}

export interface IMockDatabase<T> {
  seed(seedlings: Array<T>): void;
}
