import React from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import Button from '../../shared/buttons/Button';

const headerHeight = 40;
const tickWidth = 100;
const styles = theme => ({
  root: {
    margin: -theme.spacing.unit * 3,
    display: 'flex',
    flex: 1
  },
  leftCol: {
    borderRight: '1px solid black',
    width: 140,
    backgroundColor: '#616161'
  },
  rightCol: {
    flex: 1,
    overflowY: 'scroll',
    whiteSpace: 'nowrap',
    backgroundColor: '#2e2e2e',
    backgroundImage:
      'linear-gradient(90deg, #454545 0.50%, #2e2e2e 0.50%, #2e2e2e 50%, #454545 50%, #454545 50.50%, #2e2e2e 50.50%, #2e2e2e 100%)',
    backgroundSize: `${tickWidth * 2}.00px ${tickWidth * 2}.00px`,
    backgroundAttachment: 'local',
    backgroundPositionX: theme.spacing.unit
  },
  colHeader1: {
    height: headerHeight,
    backgroundColor: '#545454',
    borderBottom: '1px solid black',
    alignItems: 'center',
    padding: theme.spacing.unit
  },
  colHeader2: {
    height: headerHeight,
    borderBottom: '1px solid black',
    paddingLeft: theme.spacing.unit
  },
  tick: {
    backgroundColor: '#333333',
    borderBottom: '1px solid black',
    height: headerHeight,
    width: tickWidth,
    color: '#dbdbdb',
    padding: 3,
    display: 'inline-block',
    borderLeft: '1px solid #5c5c5c'
  }
});
class TestEditor extends React.Component {
  render() {
    const { test, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.leftCol}>
          <div className={classes.colHeader1}>
            <Button icon="add" />
          </div>
        </div>
        <div className={classes.rightCol}>
          <div className={classes.colHeader2}>
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i + 1} className={classes.tick}>
                {i + 1}
              </div>
            ))}
            <div>content</div>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(withStyles(styles))(TestEditor);
