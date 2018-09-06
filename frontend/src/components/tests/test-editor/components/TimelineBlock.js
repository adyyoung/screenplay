import React from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import Context from '../../../Context';
import { testRenameTrack } from '../../../../actions/tests';

const styles = theme => ({});
class TimelineBlock extends React.Component {
  render() {
    const {
      className,
      trackIndex,
      tickIndex,
      block,
      onSelect,
      selected
    } = this.props;
    const component = {
      LAUNCH_BROWSER: () => <div style={{ margin: 8 }}>Launch browser</div>
    }[block.type];
    return (
      <Context>
        {({ state, dispatch }) => {
          return (
            <div
              className={className}
              style={{
                flex: '1',
                backgroundColor: selected ? 'white' : 'rgba(255,255,255,0.6)',
                border: '1px solid black',
                color: 'black'
              }}
              onClick={onSelect}
            >
              {component ? (
                component()
              ) : (
                <div style={{ margin: 8 }}>{block.type}</div>
              )}
            </div>
          );
        }}
      </Context>
    );
  }
}

export default compose(withStyles(styles))(TimelineBlock);
