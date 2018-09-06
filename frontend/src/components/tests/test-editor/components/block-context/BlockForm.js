import React from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import Context from '../../../../Context';
import types from './types';
const styles = theme => ({});
class BlockForm extends React.Component {
  render() {
    const { selectedTrackIndex, selectedTickIndex, test } = this.props;
    const block = test.actors[selectedTrackIndex].ticks[selectedTickIndex];
    const formData = types[block.type];
    if (!formData) return <div>no data</div>;
    return (
      <Context>
        {({ state, dispatch }) => {
          return (
            <div>
              <table>
                <tbody>
                  {formData.properties.map(prop => {
                    const entry = block.properties.find(
                      p => p.key === prop.key
                    );
                    const value = entry ? entry.value : null;
                    return (
                      <tr key={prop.key}>
                        <td>{prop.label}</td>
                        <td>
                          {{
                            OPTIONS: () => (
                              <select value={value}>
                                {prop.options.map(o => (
                                  <option value={o.value}>{o.label}</option>
                                ))}
                              </select>
                            ),
                            TEXT: () => <input type="text" value={value} />
                          }[prop.type]()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        }}
      </Context>
    );
  }
}

export default compose(withStyles(styles))(BlockForm);
