import React from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import Context from '../../../Context';
import { moveBlock } from '../../../../actions/tests';
const styles = theme => ({});
class TimelineEmptyBlock extends React.Component {
  state = {
    dragOver: false
  };
  render() {
    const {
      className,
      onSelect,
      selected,
      test,
      trackIndex,
      tickIndex,
      onDrop
    } = this.props;
    const selectedStyle = selected
      ? {
          backgroundColor: 'rgba(255,255,255,0.2)',
          border: '1px solid black'
        }
      : {};
    const dropStyle = this.state.dragOver
      ? {
          backgroundColor: 'green'
        }
      : {};
    const style = { flex: 1, ...selectedStyle, ...dropStyle };
    return (
      <Context>
        {({ state, dispatch }) => {
          return (
            <div
              style={style}
              className={className}
              onClick={() => onSelect()}
              onDragEnter={ev => this.setState({ dragOver: true })}
              onDragLeave={ev => this.setState({ dragOver: false })}
              onDragOver={ev => ev.preventDefault()}
              onDrop={ev => {
                ev.preventDefault();
                this.setState({ dragOver: false });
                const source = JSON.parse(ev.dataTransfer.getData('text'));
                dispatch(
                  moveBlock(
                    test.id,
                    source.trackIndex,
                    source.tickIndex,
                    trackIndex,
                    tickIndex
                  )
                );
                onDrop();
              }}
            />
          );
        }}
      </Context>
    );
  }
}

export default compose(withStyles(styles))(TimelineEmptyBlock);
