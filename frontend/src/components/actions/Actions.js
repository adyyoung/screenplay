import React from 'react';
import EmptySection from '../shared/EmptySection';
import { withStyles } from '@material-ui/core';
const styles = theme => ({});
const Actions = ({ classes }) => (
  <div>
    <EmptySection
      subtitle="Start by adding an Action."
      buttonText="Add an action"
    />
  </div>
);

export default withStyles(styles)(Actions);
