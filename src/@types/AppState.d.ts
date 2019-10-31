import "common";

declare global {
  namespace AppState {
    type Books = AppState["books"];
  }

  interface AppState {
    readonly books: Book[];
  }

  type Book = {
    book_id: number
    name: string;
    isbn: string;
    published_at: string;
    author: string;
    cover: string;
    link: string
  };
}
