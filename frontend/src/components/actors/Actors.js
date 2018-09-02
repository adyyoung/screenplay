import React from 'react';
import EmptySection from '../shared/EmptySection';
import { withStyles } from '@material-ui/core';
import ActorCard from './ActorCard';
import Context from '../Context';
import UpsertActor from './UpsertActor';
import { deleteActor } from '../../actions/actors';
const styles = theme => ({
  actorCard: {
    // float: 'left'
    marginRight: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
    width: 300
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  }
});
const Actors = ({ classes }) => (
  <Context>
    {({ state: { actors }, dispatch, setDialog }) =>
      Object.keys(actors).length > 0 ? (
        <div>
          <div className={classes.grid}>
            {Object.keys(actors).map(id => (
              <ActorCard
                key={id}
                onEdit={() => setDialog(<UpsertActor actor={actors[id]} />)}
                onDelete={() => {
                  if (
                    window.confirm(
                      `Are you sure you want to delete actor '${
                        actors[id].name
                      }'?`
                    )
                  ) {
                    dispatch(deleteActor(id));
                  }
                }}
                actor={actors[id]}
                className={classes.actorCard}
              />
            ))}
          </div>
        </div>
      ) : (
        <EmptySection
          subtitle="Start by adding an Actor."
          buttonText="Add an actor"
          onClick={() => setDialog(<UpsertActor />)}
        />
      )
    }
  </Context>
);

export default withStyles(styles)(Actors);
