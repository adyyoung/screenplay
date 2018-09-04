import React from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import Context from '../../../Context';
import Avatars from '../../../images/avatars';

const styles = theme => ({});
class ActorBlock extends React.Component {
  render() {
    const {
      actor: { actorId },
      className
    } = this.props;

    return (
      <Context>
        {({ state }) => {
          const actor = state.actors[actorId];
          return (
            <div className={className} style={{ justifyContent: 'center' }}>
              <img
                alt={actor.name}
                src={Avatars.find(a => a.id === actor.avatarId).avatar}
                width={60}
              />
            </div>
          );
        }}
      </Context>
    );
  }
}

export default compose(withStyles(styles))(ActorBlock);
