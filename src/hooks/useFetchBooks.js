import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import action from '../actions';

const useFetchBooks = () => {
  const dispatch = useDispatch();
  const bookList = useSelector(({ books }) => books);
  useEffect(() => {
    dispatch(action.fetchBooks());
  }, []);

  return [bookList];
};

export default useFetchBooks;
