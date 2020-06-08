import { IBookItemInfo } from './book-item-info.interface';

export interface IBookArray {
  etag: string;
  id: string;
  kind: string;
  selfLink: string;
  volumeInfo: IBookItemInfo;
}
