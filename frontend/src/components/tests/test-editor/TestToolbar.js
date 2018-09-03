import React from 'react';
import { withRouter } from 'react-router';
import { Button, withStyles } from '@material-ui/core';
import { compose } from 'redux';
import Context from '../../Context';
const styles = theme => ({
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.unit * 2,
    backgroundColor: '#919191'
  }
});
const TestToolbar = ({
  match: {
    params: { testId }
  },
  classes
}) => {
  return (
    <div className={classes.toolbar}>
      <Context.Consumer>
        {({ setDialog, state }) => {
          const test = state.tests[testId];
          if (test) {
            return (
              <React.Fragment>
                <div style={{ flex: 1 }}>{test.name}</div>
                {/* <Button
                variant="contained"
                color="secondary"
                onClick={() => setDialog(<AddTest />)}
              >
                Something
              </Button> */}
              </React.Fragment>
            );
          } else {
            return null;
          }
        }}
      </Context.Consumer>
    </div>
  );
};

export default compose(
  withRouter,
  withStyles(styles)
)(TestToolbar);
