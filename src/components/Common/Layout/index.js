/* React */
import React from 'react';


function Index(components) {
  const { Content } = components;

  // eslint-disable-next-line react/prefer-stateless-function
  class Component extends React.Component {
    render() {
      return (
        // eslint-disable-next-line react/jsx-filename-extension
        <div className="console">
          <Content {...this.props} />
        </div>
      );
    }
  }

  Component.displayName = 'Layout';

  return Component;
}

export default Index;
