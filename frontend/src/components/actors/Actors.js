import React from 'react';
// import EmptySection from '../shared/EmptySection';
import { withStyles } from '@material-ui/core';
import ActorCard from './ActorCard';

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
  <div className={classes.grid}>
    {Array.from({ length: 5 }).map((_, i) => (
      <ActorCard key={i} id={i} className={classes.actorCard} />
    ))}
    {/* <EmptySection
      subtitle="Start by adding an Actor."
      buttonText="Add an actor"
    /> */}
  </div>
);

export default withStyles(styles)(Actors);
