/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from '../components/Common/Layout';
import Services from '../services/index';


export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
    };
  }

  componentDidMount() {
    const { props } = this.props;
    if (props.match && props.match.params && props.match.params.id) {
      const bookID = parseInt(props.match.params.id);
      Services.bookServices.list().then((res) => {
        const localBook = ((res) || [])
          .find(obj => obj.book_id === bookID);
        this.setState(() => ({
          book: localBook,
        }));
      });
    }
  }


  render() {
    const { book } = this.state;
    return (
      <div>
        <h1>This is book detail page</h1>
        <p className="indent">
          <span style={{margin: '2%'}}>
            {book.name}
          </span>
          <span style={{margin: '2%'}}>
            {book.author}
          </span>
          <span style={{margin: '2%'}}>
            {book.cover}
          </span>
          <span style={{margin: '2%'}}>
            {book.isbn}
          </span>
          <span style={{margin: '2%'}}>
            {book.published_at}
          </span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

// eslint-disable-next-line no-class-assign
Home = withRouter(Home);

const refined = Layout({
  Content: Home,
  Current: 'bookDetail',
});

export default connect(mapStateToProps)(refined);
