import React from 'react';

const Layout = WrappedComponent => class extends React.PureComponent {
  render() {
    return (
      <div data-test="layoutComponent">
        <div>HEADER</div>
        <WrappedComponent {...this.props} />
        <div>FOOTER</div>
      </div>
    );
  }
};

export default Layout;
