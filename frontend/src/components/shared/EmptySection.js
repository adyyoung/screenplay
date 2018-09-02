import React from 'react';
import { withStyles, Typography, Button } from '@material-ui/core';
import Robot from '../images/robot.svg';
const styles = theme => ({
  image: {
    maxWidth: 400
  },
  empty: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  cta: {
    margin: theme.spacing.unit * 2
  }
});
const EmptySection = ({
  classes,
  title = "It's looking very quiet here.",
  subtitle,
  buttonText,
  onClick = () => {}
}) => (
  <div>
    <div className={classes.empty}>
      <img alt="robots" className={classes.image} src={Robot} />
      <Typography variant="display1" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subheading" gutterBottom>
        {subtitle}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.cta}
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </div>
  </div>
);

export default withStyles(styles)(EmptySection);
