import React from 'react';
import {
  withStyles,
  CardActionArea,
  Card,
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
  },
  cardActionArea: {
    width: '100%'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
});
const Actors = ({ classes, className, actor, onEdit, onDelete }) => (
  <div className={className}>
    <Card className={classes.card}>
      <CardActionArea className={classes.cardActionArea} onClick={onEdit}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            alt={actor.avatarId}
            className={classes.avatar}
            src={Avatars.find(a => a.id === actor.avatarId).avatar}
          />
        </div>

        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {actor.name}
          </Typography>
          <Typography component="p">{actor.description}</Typography>
        </CardContent>
      </CardActionArea>

      <div style={{ flex: 1 }} />
      <CardActions>
        <Button size="small" color="primary" onClick={onEdit}>
          Edit
        </Button>
        <Button size="small" color="secondary" onClick={onDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  </div>
);

export default withStyles(styles)(Actors);
