import { connect } from 'react-redux';
import BookList from '../components/BookList';
import { selectBooks } from '../store/selectors/book';

function mapStateToProps(state) {
    return {
        books: selectBooks(state)
    };
}

export default connect(mapStateToProps)(BookList);
