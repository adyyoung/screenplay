import React from 'react';
import { Button } from '@material-ui/core';
import Context from '../Context';
import UpsertTest from './UpsertTest';
const Toolbar = () => {
  return (
    <Context.Consumer>
      {({ setDialog }) => (
        <React.Fragment>
          <div style={{ flex: 1 }} />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setDialog(<UpsertTest />)}
          >
            Add a scene
          </Button>
        </React.Fragment>
      )}
    </Context.Consumer>
  );
};

export default Toolbar;
