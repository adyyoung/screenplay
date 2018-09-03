import React from 'react';
import { Button } from '@material-ui/core';
import Context from '../../Context';
import AddTest from '../AddTest';
const TestToolbar = () => {
  return (
    <Context.Consumer>
      {({ setDialog }) => (
        <React.Fragment>
          <div style={{ flex: 1 }} />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setDialog(<AddTest />)}
          >
            Add a scene
          </Button>
        </React.Fragment>
      )}
    </Context.Consumer>
  );
};

export default TestToolbar;
