import React from 'react';

class TestEditor extends React.Component {
  render() {
    const { test } = this.props;
    return <h1>{test.name}</h1>;
  }
}

export default TestEditor;
    