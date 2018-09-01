import React from 'react';
import {
  withStyles,
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core';
import Avatars from '../images/avatars/index';
const styles = theme => ({
  avatar: {
    maxWidth: 200,
    margin: theme.spacing.unit * 2
  }
});
const Actors = ({ classes, className, id = 0 }) => (
  <div className={className}>
    <Card className={classes.card}>
      <CardActionArea>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            alt="robots"
            className={classes.avatar}
            src={Avatars[id].avatar}
          />
        </div>

        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {Avatars[id].id}
          </Typography>
          <Typography component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="secondary">
          Delete
        </Button>
      </CardActions>
    </Card>
  </div>
);

export default withStyles(styles)(Actors);
