import {
  IBookItemInfo,
  IBookArray,
  IBookSearchingResult
} from '../models';

export class GoogleBooksApi {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  public getBooksInfo(method: string, query: string): void {
    const url = `${this.endpoint}${method}?q=${query}`;

    fetch(url)
      .then((response: Response) => {
        return response.json();
      })
      .then((data: IBookSearchingResult) => {
        let result =
          document.querySelector<HTMLDivElement>('#result') ||
          document.createElement('div');
        this.checkData(result, data);
        let list = document.createElement('ul');
        this.addResultContainer(list, result);
        if (data && data.items) {
          data.items.forEach((item: IBookArray) => {
            this.renderBook(list, item.volumeInfo);
          });
        }
      });
  };

  private checkData(
    node: HTMLElement | null,
    data: IBookSearchingResult
  ): void {
    if (data.totalItems === 0 && node !== null) {
      let notFound = document.createElement('p');
      notFound.innerText = 'Поиск не дал результатов.';
      node.appendChild(notFound);
    }
  };

  private addResultContainer(node: HTMLElement, result: HTMLElement): void {
    result.appendChild(node);
  };

  private renderBook(node: HTMLElement, data: IBookItemInfo ): void {
    let li = document.createElement('li');
    li.innerHTML =
     `<a href=${data.previewLink} target='_blank'><p>${data.title}</p><a/>`;
    node.appendChild(li);
  };
};
