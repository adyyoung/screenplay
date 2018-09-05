import React from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import Context from '../../../Context';
import Avatars from '../../../images/avatars';
import { testRenameTrack } from '../../../../actions/tests';
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
  state = {
    trackName: this.props.test.actors[this.props.selectedTrackIndex].trackName
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      trackName: nextProps.test.actors[nextProps.selectedTrackIndex].trackName
    });
  }
  render() {
    const { classes, selectedTrackIndex, test } = this.props;
    return (
      <Context>
        {({ state, dispatch }) => {
          const actor = state.actors[test.actors[selectedTrackIndex].actorId];
          const track = test.actors[selectedTrackIndex];
          const renameTrack = () =>
            dispatch(
              testRenameTrack(test.id, selectedTrackIndex, this.state.trackName)
            );
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
                    alignItems: 'center',
                    backgroundColor: '#616161',
                    padding: 8,
                    textAlign: 'center'
                  }}
                >
                  <div>options</div>
                </div>
                <div
                  style={{
                    flex: 1,
                    backgroundColor: '#2e2e2e',
                    overflowY: 'auto',
                    padding: 8
                  }}
                >
                  <div>test</div>
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
