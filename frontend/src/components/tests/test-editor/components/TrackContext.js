import React from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import Context from '../../../Context';
import Avatars from '../../../images/avatars';
import { testRenameTrack, testDeleteTrack } from '../../../../actions/tests';
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
    height: 40
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
class TrackContext extends React.Component {
  state = {
    trackName: this.props.test.actors[this.props.selectedTrackIndex].trackName
  };
  render() {
    const { classes, selectedTrackIndex, test, onDelete } = this.props;
    return (
      <Context>
        {({ state, dispatch }) => {
          const actor = state.actors[test.actors[selectedTrackIndex].actorId];
          //   const track = test.actors[selectedTrackIndex];
          const renameTrack = () =>
            dispatch(
              testRenameTrack(test.id, selectedTrackIndex, this.state.trackName)
            );
          return (
            <div className={classes.root}>
              <div className={classes.toolbar}>
                <div className={classes.toolbarLeft}> {''}</div>
                <div className={classes.toolbarCenter}>{''}</div>
                <div className={classes.toolbarRight}>
                  <Button
                    onClick={() => {
                      if (window.confirm('Delete track?')) {
                        onDelete();
                        dispatch(testDeleteTrack(test.id, selectedTrackIndex));
                      }
                    }}
                  >
                    Delete track
                  </Button>
                </div>
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
                  <img
                    alt={actor.name}
                    src={Avatars.find(a => a.id === actor.avatarId).avatar}
                  />
                  <h2>{actor.name}</h2>
                </div>
                <div
                  style={{
                    flex: 1,
                    backgroundColor: '#2e2e2e',
                    overflowY: 'auto',
                    padding: 8
                  }}
                >
                  <div>Timeline properties</div>
                  <hr />

                  <table>
                    <tbody>
                      <tr>
                        <td style={{ width: 200 }}>Track name</td>
                        <td>
                          <form onSubmit={renameTrack}>
                            <input
                              type="text"
                              value={this.state.trackName}
                              style={{
                                backgroundColor: 'black',
                                border: '1px solid white',
                                color: 'white'
                              }}
                              onChange={({ target: { value } }) =>
                                this.setState({ trackName: value })
                              }
                              onBlur={renameTrack}
                              onFocus={e => e.target.select()}
                            />
                          </form>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <br />
                  <div>Actor properties</div>
                  <hr />
                  <table>
                    <tbody>
                      {actor.customAttributes.map(attr => (
                        <tr key={attr.key}>
                          <td style={{ width: 200 }}>{attr.key}</td>
                          <td>{attr.password ? '*******' : attr.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
        }}
      </Context>
    );
  }
}

export default compose(withStyles(styles))(TrackContext);
