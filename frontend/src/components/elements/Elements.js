import React from 'react';
import EmptySection from '../shared/EmptySection';
import { withStyles } from '@material-ui/core';
const styles = theme => ({});
const Elements = ({ classes }) => (
  <div>
    <EmptySection
      subtitle="Start by adding an Element."
      buttonText="Add an element"
    />
  </div>
);

export default withStyles(styles)(Elements);
