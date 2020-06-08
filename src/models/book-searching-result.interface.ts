import { IBookArray } from './book-array.interface';

export interface IBookSearchingResult {
  items?: Array<IBookArray>;
  kind: string;
  ​totalItems: number;
}
