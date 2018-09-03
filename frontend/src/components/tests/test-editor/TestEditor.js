import React from 'react';
import { withStyles, Paper } from '@material-ui/core';
import { compose } from 'redux';
import Button from '../../shared/buttons/Button';

const headerHeight = 40;
const tickWidth = 200;
const leftColumn = 140;
const styles = theme => ({
  root: {
    margin: -theme.spacing.unit * 3,
    display: 'flex',
    flex: 1
  },
  leftCol: {
    borderRight: '1px solid black',
    width: leftColumn,
    backgroundColor: '#616161',
    display: 'flex',
    flexDirection: 'column'
  },
  rightCol: {
    flex: 1,
    overflowY: 'hidden',
    overflowX: 'scroll',
    whiteSpace: 'nowrap',
    backgroundColor: '#2e2e2e',
    backgroundImage:
      'linear-gradient(90deg, #454545 0.50%, #2e2e2e 0.50%, #2e2e2e 50%, #454545 50%, #454545 50.50%, #2e2e2e 50.50%, #2e2e2e 100%)',
    backgroundSize: `${tickWidth * 2}.00px ${tickWidth * 2}.00px`,
    backgroundAttachment: 'local',
    backgroundPositionX: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'column'
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
    paddingLeft: 3,
    paddingTop: 6,
    display: 'inline-block',
    borderLeft: '1px solid #5c5c5c'
  }
});
class TestEditor extends React.Component {
  render() {
    const { test, classes } = this.props;
    const handleScroll = ({ target: { scrollTop } }) => {
      if (this.state.scrollFocus === 1) {
        this.refs.trackscroll2.scrollTop = scrollTop;
      } else if (this.state.scrollFocus === 2) {
        this.refs.trackscroll1.scrollTop = scrollTop;
      }
    };
    return (
      <div className={classes.root}>
        <div className={classes.leftCol}>
          <div className={classes.colHeader1}>
            <Button icon="add" />
          </div>

          <div
            onScroll={handleScroll}
            onMouseOver={() => this.setState({ scrollFocus: 1 })}
            ref="trackscroll1"
            style={{ overflowY: 'scroll' }}
          >
            {Array.from({ length: 50 }).map((_, i) => (
              <Paper
                key={i + 1}
                style={{ margin: 4, width: leftColumn - 8, height: 100 }}
              >
                {test.name}
                {i}
              </Paper>
            ))}
          </div>
        </div>
        <div className={classes.rightCol}>
          <div className={classes.colHeader2}>
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i + 1} className={classes.tick}>
                {i + 1}
              </div>
            ))}
          </div>

          <div
            ref="trackscroll2"
            onMouseOver={() => this.setState({ scrollFocus: 2 })}
            onScroll={handleScroll}
            style={{
              paddingLeft: 8,
              overflowY: 'scroll',
              width: 50 * tickWidth
            }}
          >
            {Array.from({ length: 50 }).map((_, i) => (
              <Paper
                key={i + 1}
                style={{ margin: 4, width: tickWidth, height: 100 }}
              >
                content
                {i}
              </Paper>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default compose(withStyles(styles))(TestEditor);
