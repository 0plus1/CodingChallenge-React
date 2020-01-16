/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from '../components/Common/Layout';
import Services from '../services/index';

// eslint-disable-next-line react/prefer-stateless-function
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }  

  componentDidMount() {
    this.listReturns();
  }

  enterBookPage = (e,data) => {
    this.props.history.push(`/book/${data.book_id}`);
  };

  listReturns() {
    Services.bookServices.list().then((res) => {
      this.setState(() => ({
        // eslint-disable-next-line react/no-unused-state
        books: res,
      }));
    });
  }

  render() {
    const { books } = this.state;
    return (
      <div style={{alignItems: 'center',justifyContent: 'center'}}>
        <h1>Welcome! Book listing page</h1>
        {
        books.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <p className="indent" key={index}>
            <span className="inner-compnent" onClick={e => this.enterBookPage(e, item)} style={{margin: '2%', cursor: 'pointer'}}>
              {item.name}
            </span>
            <span className="inner-compnent" style={{margin: '2%'}}>
              {item.author}
            </span>
            <span className="inner-compnent" style={{margin: '2%'}}>
              {item.cover}
            </span>
            <span className="inner-compnent" style={{margin: '2%'}}>
              {item.isbn}
            </span>
            <span className="inner-compnent" style={{margin: '2%'}}>
              {item.published_at}
            </span>
          </p>
        ))
        }
      </div>
    );
  }
}

const mapStateToProps = () => ({});

// eslint-disable-next-line no-class-assign
Home = withRouter(Home);

const refined = Layout({
  Content: Home,
  Current: 'homepage',
});

export default connect(mapStateToProps)(refined);

// export default Home;
