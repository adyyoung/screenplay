import React from 'react';
import { Button, AppBar, Toolbar } from '@material-ui/core';
import Context from '../Context';
import UpsertActor from './UpsertActor';
const ActorsToolbar = () => {
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
                onClick={() => setDialog(<UpsertActor />)}
              >
                Add an actor
              </Button>
            </React.Fragment>
          )}
        </Context.Consumer>
      </Toolbar>
    </AppBar>
  );
};

export default ActorsToolbar;
