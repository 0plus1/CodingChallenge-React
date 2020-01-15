import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import BookList from '../components/BookList';
import { selectBooks } from '../store/selectors/book';


function mapStateToProps(state) {
    console.log('state in books container', state)
    const { books } = selectBooks(state);
    console.log('booksss', books);
    return {
        books: books
    };
}

const BooksContainer = () => {
    return (
        <div>
            <BookList />
        </div>
    );
};

// function mapDispatchToProps(dispatch) {
//     return {
//         performMsiCheck: (trigger: MsiTrigger) =>
//             dispatch(performMsiCheck(trigger)),
//         showDownloadModal: () => {
//             dispatch(setSuppressNotPlayed());
//             dispatch(setModalVisiblity(ModalType.Download, true));
//         },
//         toggleAdded: () => dispatch(toggleAdded())
//     };
// }

// const BooksContainer = connect(mapStateToProps)(Book);

export default connect(mapStateToProps)(BooksContainer);
