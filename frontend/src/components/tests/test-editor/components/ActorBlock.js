import React from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import Context from '../../../Context';
import Avatars from '../../../images/avatars';
import { testRenameTrack } from '../../../../actions/tests';

const styles = theme => ({});
class ActorBlock extends React.Component {
  state = {
    editNameMode: false,
    trackName: this.props.actor.trackName
  };
  handleNameChange(e, dispatch) {
    e.preventDefault();
    this.setState({
      editNameMode: false
    });
    dispatch(
      testRenameTrack(this.props.testId, this.props.index, this.state.trackName)
    );
  }
  render() {
    const { actor, className, onSelect, selected } = this.props;
    const { editNameMode, trackName } = this.state;
    return (
      <Context>
        {({ state, dispatch }) => {
          const act = state.actors[actor.actorId];
          return (
            <div
              onClick={() => onSelect()}
              className={className}
              style={{
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: selected ? '#858585' : ''
              }}
            >
              <img
                alt={act.name}
                src={Avatars.find(a => a.id === act.avatarId).avatar}
                height={60}
              />

              {editNameMode ? (
                <form
                  onSubmit={e => this.handleNameChange(e, dispatch)}
                  style={{ textAlign: 'center' }}
                >
                  <input
                    value={trackName}
                    autoFocus
                    style={{ textAlign: 'center' }}
                    onBlur={e => this.handleNameChange(e, dispatch)}
                    onChange={({ target: { value } }) =>
                      this.setState({ trackName: value })
                    }
                    onFocus={e => e.target.select()}
                    type="text"
                  />
                </form>
              ) : (
                <div
                  onClick={() => this.setState({ editNameMode: true })}
                  style={{ fontSize: 12, paddingTop: 3, textAlign: 'center' }}
                >
                  {actor.trackName || <i>Undefined</i>}
                </div>
              )}
            </div>
          );
        }}
      </Context>
    );
  }
}

export default compose(withStyles(styles))(ActorBlock);
