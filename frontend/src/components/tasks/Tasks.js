import React from 'react';
import EmptySection from '../shared/EmptySection';
import { withStyles } from '@material-ui/core';
const styles = theme => ({});
const Tasks = ({ classes }) => (
  <div>
    <EmptySection
      subtitle="Start by adding a Script."
      buttonText="Add a script"
    />
  </div>
);

export default withStyles(styles)(Tasks);
