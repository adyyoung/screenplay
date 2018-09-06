import React from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import Context from '../../../Context';
import { testAddBlock } from '../../../../actions/tests';
import Button from '../../../shared/buttons/Button';
const styles = theme => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    color: 'white'
  },
  toolbar: {
    display: 'flex',
    backgroundColor: '#484848',
    padding: 8,
    color: 'white',
    height: 30
  },
  toolbarLeft: {
    flex: 1
  },
  toolbarRight: {},
  toolbarCenter: {
    flex: 1,
    alignItems: 'center'
  },
  content: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#616161'
  }
});
class BlockSelectorContext extends React.Component {
  render() {
    const { classes, selectedTrackIndex, selectedTickIndex, test } = this.props;
    const block = test.actors[selectedTrackIndex].ticks[selectedTickIndex];
    return (
      <Context>
        {({ state, dispatch }) => {
          return (
            <div className={classes.root}>
              <div className={classes.toolbar}>
                <div className={classes.toolbarLeft}> {''}</div>
                <div className={classes.toolbarCenter}>{''}</div>
                <div className={classes.toolbarRight}>{''}</div>
              </div>
              <div className={classes.content}>
                <div
                  style={{
                    width: 200,
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#616161',
                    padding: 8
                  }}
                >
                  <div>{''}</div>
                </div>
                <div
                  style={{
                    flex: 1,
                    backgroundColor: '#2e2e2e',
                    overflowY: 'auto',
                    padding: 8
                  }}
                >
                  {block.type}
                </div>
              </div>
            </div>
          );
        }}
      </Context>
    );
  }
}

export default compose(withStyles(styles))(BlockSelectorContext);
