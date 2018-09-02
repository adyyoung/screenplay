import React from 'react';
import { Button } from '@material-ui/core';
import Context from '../Context';
import UpsertActor from './UpsertActor';
const Toolbar = () => {
  return (
    <Context.Consumer>
      {({ setDialog }) => (
        <React.Fragment>
          <div style={{ flex: 1 }} />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setDialog(<UpsertActor />)}
          >
            Add an actor
          </Button>
        </React.Fragment>
      )}
    </Context.Consumer>
  );
};

export default Toolbar;
