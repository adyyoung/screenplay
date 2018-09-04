import React from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import Context from '../../../Context';

const styles = theme => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  toolbar: {
    display: 'flex',
    backgroundColor: '#484848',
    padding: 8,
    color: 'white'
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
    backgroundColor: '#616161'
  }
});
class TrackContext extends React.Component {
  render() {
    const { classes, selectedTrackIndex, test } = this.props;
    return (
      <Context>
        {({ state, dispatch }) => {
          const actor = state.actors[test.actors[selectedTrackIndex].actorId];
          return (
            <div className={classes.root}>
              <div className={classes.toolbar}>
                <div className={classes.toolbarLeft}>{actor.name}</div>
                <div className={classes.toolbarCenter}>center</div>
                <div className={classes.toolbarRight}>right</div>
              </div>
              <div className={classes.content}>{JSON.stringify(actor)}</div>
            </div>
          );
        }}
      </Context>
    );
  }
}

export default compose(withStyles(styles))(TrackContext);
