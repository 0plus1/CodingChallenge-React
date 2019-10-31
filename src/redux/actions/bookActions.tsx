import * as types from "./actionTypes";
import { Dispatch } from "redux";
import axios from "axios";

export function getBookSuccess(books: Book[]) {
  return { type: types.GET_BOOKS_SUCCESS, books };
}

const booksUrl =
  "https://my-json-server.typicode.com/0plus1/CodingChallenge-react/";

export function getBooks() {
  return function(dispatch: Dispatch) {
    axios
      .get(booksUrl + "books")
      .then(function(response: any) {
        const books: Book[] = response.data.map((book: Book) => {
          book.link = "book/" + book.book_id;
          return book;
        });
        dispatch(getBookSuccess(books));
        console.log("Get Books Worked");
      })
      .catch(function(error) {
        console.log(error);
        return error;
      });
  };
}
