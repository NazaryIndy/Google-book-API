import { GoogleBooksApi } from './services/google-books-api';

const ENDPOINT = 'https://www.googleapis.com/books/v1/';

let googleBooksService = new GoogleBooksApi(ENDPOINT);
let input =
  document.querySelector<HTMLInputElement>('#input') ||
  document.createElement('input');
let button = document.querySelector('#button');
let divResult =
  document.querySelector<HTMLDivElement>('#result') ||
  document.createElement('div');

if (button !== null) {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    clearInnerHTML(divResult);
    let query= `intitle:${encodeURI(input.value)}`;
    googleBooksService.getBooksInfo('volumes', query);
  });
};

function clearInnerHTML(element: HTMLElement): void {
  element.innerHTML = ' ';
};
