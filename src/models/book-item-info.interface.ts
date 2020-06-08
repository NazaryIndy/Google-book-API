import { IIndustryIdentifiers } from './industry-identifiers.interface'
import { IBookReadingModes } from './book-reading-modes.interface';
import { IPanelizationSummary } from './panelization-summary.interface';
import { IBookImageLink } from './book-image-link.interface';

export interface IBookItemInfo {
  allowAnonLogging: boolean;
  authors?: Array<string>;
  canonicalVolumeLink: string;​​​​
  categories: Array<string>;​​​​
  contentVersion: string;​​​​
  industryIdentifiers: Array<IIndustryIdentifiers>;
  imageLinks: IBookImageLink;​​​​
  infoLink: string;​​​​​​​​
  language: string;​​​​​​​​
  maturityRating: string;​​​​​​​​
  pageCount: number;​​​​
  panelizationSummary?: IPanelizationSummary;​​​​
  previewLink: string;​​​​​​​​
  printType: string;​​​​​​​​
  publishedDate: string;​​​​
  readingModes: IBookReadingModes;​​​​
  title: string;
}
