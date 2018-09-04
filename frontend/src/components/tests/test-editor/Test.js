import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import Context from '../../Context';
import TestEditor from './TestEditor';
class Test extends React.Component {
  render() {
    const { testId } = this.props.match.params;

    return (
      <Context>
        {({ state }) => {
          const test = state.tests[testId];
          if (test) {
            return <TestEditor test={test} />;
          } else {
            return null;
          }
        }}
      </Context>
    );
  }
}

export default compose(withRouter)(Test);
