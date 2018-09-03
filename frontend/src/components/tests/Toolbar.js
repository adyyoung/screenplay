import React from 'react';
import { Button, AppBar, Toolbar } from '@material-ui/core';
import Context from '../Context';
import AddTest from './AddTest';
const TestsToolbar = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
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
      </Toolbar>
    </AppBar>
  );
};

export default TestsToolbar;
