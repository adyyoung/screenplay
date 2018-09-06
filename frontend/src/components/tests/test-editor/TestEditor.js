import React from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import AddActor from './components/AddActor';
import ActorBlock from './components/ActorBlock';
import TrackContext from './components/TrackContext';
import BlockSelectorContext from './components/BlockSelectorContext';
import TimelineBlock from './components/TimelineBlock';
import BlockContext from './components/BlockContext';
import TimelineEmptyBlock from './components/TimelineEmptyBlock';
const headerHeight = 40;
const tickWidth = 200;
const leftColumn = 140;
const trackHieght = 100;
const styles = theme => ({
  root: {
    display: 'flex',
    margin: -theme.spacing.unit * 3,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#919191'
  },
  timelineRoot: {
    display: 'flex',
    flex: 1,
    margin: 4,
    borderRadius: 3,
    border: '1px solid black',
    overflow: 'hidden'
  },
  trackContextRoot: {
    display: 'flex',
    height: 300,
    margin: 4,
    marginTop: 0,
    borderRadius: 3,
    border: '1px solid black',
    overflow: 'hidden'
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
  },
  actorBlock: {
    height: trackHieght,
    backgroundColor: '#616161',
    borderBottom: '1px solid #474747',
    color: 'white',
    padding: 3,
    display: 'flex'
  },
  track: {
    height: trackHieght,
    borderBottom: '1px solid rgba(0,0,0,0.35)',
    display: 'flex'
  },
  taskBlock: {
    marginLeft: 1,
    marginTop: 0,
    margonBottom: 2,
    height: trackHieght - 1,
    color: 'white',
    display: 'flex',
    overflow: 'hidden',
    borderRadius: 8,
    flex: '1',
    border: '1px solid transparent',
    fontSize: 12,
    '&:hover': {
      backgroundColor: 'rgba(0,0,255,0.1)',
      borderColor: 'rgba(0,0,0,0.9)'
    }
  }
});
class TestEditor extends React.Component {
  state = {
    selectedTrackIndex: this.props.test.actors.length ? 0 : null,
    selectedTickIndex: null,
    scrollTop: 0,
    numberOfTick: 0
  };

  clearSelection() {
    this.setState({
      selectedTrackIndex: null,
      selectedTickIndex: null
    });
  }
  componentDidMount() {
    this.updateNumberOfTicks();
  }
  updateNumberOfTicks() {
    const baseTicks =
      this.props.test.actors.length > 0
        ? Math.max(...this.props.test.actors.map(a => a.ticks.length))
        : 0;
    const expectedTicks = 5 + baseTicks;
    if (expectedTicks !== this.state.numberOfTick) {
      this.setState({ numberOfTick: expectedTicks });
    }
  }
  componentDidUpdate({ test }, { numberOfTick }) {
    this.updateNumberOfTicks();
  }

  render() {
    const { test, classes } = this.props;
    const { selectedTrackIndex, selectedTickIndex, numberOfTick } = this.state;

    const handleScroll = ({ target: { scrollTop } }) => {
      if (scrollTop !== this.state.scrollTop) {
        this.setState({ scrollTop }, () => {
          this.refs['trackScroll1'].scrollTop = scrollTop;
          this.refs['trackScroll2'].scrollTop = scrollTop;
        });
      }
    };

    return (
      <div className={classes.root}>
        <div className={classes.timelineRoot}>
          <div className={classes.leftCol}>
            <div
              className={classes.colHeader1}
              onClick={this.clearSelection.bind(this)}
            >
              <AddActor test={test} />
            </div>
            <div
              ref="trackScroll1"
              onScroll={handleScroll}
              style={{ overflowY: 'scroll' }}
            >
              {test.actors.map((actor, i) => (
                <ActorBlock
                  selected={selectedTrackIndex === i}
                  onSelect={() =>
                    this.setState({
                      selectedTrackIndex: i,
                      selectedTickIndex: null
                    })
                  }
                  key={i}
                  index={i}
                  testId={test.id}
                  actor={actor}
                  className={classes.actorBlock}
                />
              ))}
            </div>
          </div>
          <div className={classes.rightCol}>
            <div className={classes.colHeader2}>
              {Array.from({ length: numberOfTick }).map((_, i) => (
                <div key={i + 1} className={classes.tick}>
                  {i + 1}
                </div>
              ))}
            </div>
            <div
              ref="trackScroll2"
              onScroll={handleScroll}
              style={{
                marginLeft: 8,
                overflowY: 'scroll',
                width: numberOfTick * tickWidth
              }}
            >
              {test.actors.map((_, i) => (
                <div
                  key={i}
                  className={classes.track}
                  style={{
                    backgroundColor:
                      selectedTrackIndex === i && 'rgba(255,255,255,0.03)'
                  }}
                >
                  {Array.from({ length: numberOfTick }).map((_, t) => (
                    <React.Fragment key={t}>
                      {test.actors[i].ticks[t] ? (
                        <TimelineBlock
                          selected={
                            selectedTickIndex === t && selectedTrackIndex === i
                          }
                          onSelect={() =>
                            this.setState({
                              selectedTickIndex: t,
                              selectedTrackIndex: i
                            })
                          }
                          trackIndex={i}
                          tickIndex={t}
                          block={test.actors[i].ticks[t]}
                          className={classes.taskBlock}
                        />
                      ) : (
                        <TimelineEmptyBlock
                          className={classes.taskBlock}
                          selected={
                            selectedTickIndex === t && selectedTrackIndex === i
                          }
                          test={test}
                          trackIndex={i}
                          tickIndex={t}
                          selectedTrackIndex={selectedTrackIndex}
                          selectedTickIndex={selectedTickIndex}
                          style={{ flex: '1' }}
                          onSelect={() =>
                            this.setState({
                              selectedTickIndex: t,
                              selectedTrackIndex: i
                            })
                          }
                          onDrop={() => {
                            this.setState({
                              selectedTickIndex: t,
                              selectedTrackIndex: i
                            });
                          }}
                        />
                      )}

                      {}
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        {selectedTrackIndex !== null && (
          <div className={classes.trackContextRoot}>
            {selectedTickIndex !== null && test.actors[selectedTrackIndex] ? (
              test.actors[selectedTrackIndex].ticks[selectedTickIndex] ? (
                <BlockContext
                  key={selectedTickIndex + ',' + selectedTrackIndex}
                  selectedTickIndex={selectedTickIndex}
                  selectedTrackIndex={selectedTrackIndex}
                  test={test}
                />
              ) : (
                <BlockSelectorContext
                  key={selectedTickIndex + ',' + selectedTrackIndex}
                  selectedTickIndex={selectedTickIndex}
                  selectedTrackIndex={selectedTrackIndex}
                  test={test}
                />
              )
            ) : (
              <TrackContext
                key={selectedTrackIndex}
                selectedTrackIndex={selectedTrackIndex}
                test={test}
                onDelete={() => this.clearSelection()}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default compose(withStyles(styles))(TestEditor);
