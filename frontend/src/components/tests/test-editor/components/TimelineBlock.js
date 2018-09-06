import React from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import Context from '../../../Context';
import {} from '../../../../actions/tests';
import types from './block-context/types';
const styles = theme => ({});
class TimelineBlock extends React.Component {
  render() {
    const {
      className,
      block,
      onSelect,
      selected,
      tickIndex,
      trackIndex
    } = this.props;

    const style = {
      flex: '1',
      backgroundColor: selected ? 'white' : 'rgba(255,255,255,0.6)',
      border: '1px solid black',
      color: 'black'
    };

    return (
      <Context>
        {({ state, dispatch }) => {
          return (
            <div
              className={className}
              draggable
              style={style}
              onMouseDown={onSelect}
              onDragStart={ev => {
                ev.dataTransfer.effectAllowed = 'move';
                ev.dataTransfer.dropEffect = 'move';
                ev.dataTransfer.setData(
                  'text',
                  JSON.stringify({ trackIndex, tickIndex })
                );
              }}
            >
              <div style={{ margin: 8 }}>{types[block.type].label}</div>
            </div>
          );
        }}
      </Context>
    );
  }
}

export default compose(withStyles(styles))(TimelineBlock);
