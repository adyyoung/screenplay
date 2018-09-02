import React from 'react';

class Test extends React.Component {
  render() {
    const { test } = this.props;
    return (
      <div>
        <h1>{test.name}</h1>
      </div>
    );
  }
}

export default Test;
