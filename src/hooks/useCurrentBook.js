import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import action from '../actions';

const useCurrentBook = (book_id) => {
  const dispatch = useDispatch();
  const bookList = useSelector(({ books }) => books);
  const currentBook = useSelector(({ book }) => book);

  useEffect(() => {
    if (bookList.length > 0) {
      const book = bookList.find(each => each.book_id.toString() === book_id.toString());
      if (book) {
        dispatch(action.setBook(book));
      } else {
        dispatch(action.setBook(null));
      }
    }
  }, [bookList]);

  return [currentBook];
};

export default useCurrentBook;
