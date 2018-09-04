import React from 'react';
import { withStyles, Button as MButton } from '@material-ui/core';
import { compose } from 'redux';
import Button from '../../../shared/buttons/Button';
import Context from '../../../Context';
import Avatars from '../../../images/avatars';
import { testAddActor } from '../../../../actions/tests';
const styles = theme => ({});

class SelectActor extends React.Component {
  render() {
    const { onSelect } = this.props;

    const actors = Object.values(this.props.actors);
    return (
      <div
        style={{
          padding: 8,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        {actors.map(actor => (
          <MButton
            key={actor.id}
            onClick={() => onSelect(actor.id)}
            style={{ width: 160, display: 'flex', flexDirection: 'column' }}
          >
            <div>
              <img
                alt={actor.name}
                src={Avatars.find(a => a.id === actor.avatarId).avatar}
                width={60}
              />
              <div>{actor.name}</div>
            </div>
          </MButton>
        ))}
      </div>
    );
  }
}

class AddActor extends React.Component {
  render() {
    const { test } = this.props;
    return (
      <Context.Consumer>
        {({ setDialog, state: { actors }, dispatch }) => (
          <Button
            icon="add"
            onClick={() =>
              setDialog(
                <SelectActor
                  actors={actors}
                  onSelect={id => {
                    setDialog(null);
                    dispatch(testAddActor(test.id, id));
                  }}
                />
              )
            }
          />
        )}
      </Context.Consumer>
    );
  }
}

export default compose(withStyles(styles))(AddActor);
