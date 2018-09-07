import React from 'react';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import Context from '../../Context';
import Button from '../../shared/buttons/Button';
const styles = theme => ({
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    backgroundColor: '#545454',
    color: 'white'
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
                <Button>Scene Variables</Button>
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
