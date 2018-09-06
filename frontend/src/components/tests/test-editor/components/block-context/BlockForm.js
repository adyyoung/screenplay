import React from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import Context from '../../../../Context';
import types from './types';
import { updateBlockProperty } from '../../../../../actions/tests';
import LocatorInput from './LocatorInput';
const styles = theme => ({
  input: {
    backgroundColor: 'black',
    border: '1px solid white',
    color: 'white'
  }
});

class BlockForm extends React.Component {
  state = {
    properties: []
  };
  constructor() {
    super();
    this.handleChange.bind(this);
    this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const { block } = this.props;
    this.setState({
      properties: block.properties
    });
  }
  handleSubmit(dispatch, key) {
    const { selectedTrackIndex, selectedTickIndex, test } = this.props;
    dispatch(
      updateBlockProperty(
        test.id,
        selectedTrackIndex,
        selectedTickIndex,
        key,
        this.state.properties.find(p => p.key === key).value
      )
    );
  }
  handleChange(key, value) {
    const newProperties = this.state.properties;
    const entry = newProperties.find(p => p.key === key);
    if (entry) {
      entry.value = value;
    } else {
      newProperties.push({ key, value });
    }
    this.setState({ properties: newProperties });
  }
  render() {
    const { block, classes } = this.props;
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
                    const value = (
                      this.state.properties.find(p => p.key === prop.key) || {}
                    ).value;

                    return (
                      <tr key={prop.key}>
                        <td>{prop.label}</td>
                        <td>
                          {{
                            SELECT: () => (
                              <select
                                className={classes.input}
                                onChange={({ target: { value } }) =>
                                  this.handleChange(prop.key, value)
                                }
                                onBlur={() =>
                                  this.handleSubmit(dispatch, prop.key)
                                }
                                value={value}
                              >
                                {prop.options.map(o => (
                                  <option key={o.value} value={o.value}>
                                    {o.label}
                                  </option>
                                ))}
                              </select>
                            ),
                            TEXT: () => (
                              <input
                                className={classes.input}
                                type="text"
                                onChange={({ target: { value } }) =>
                                  this.handleChange(prop.key, value)
                                }
                                onBlur={() =>
                                  this.handleSubmit(dispatch, prop.key)
                                }
                                onFocus={e => e.target.select()}
                                value={value || ''}
                              />
                            ),
                            LOCATOR: () => {
                              return (
                                <LocatorInput
                                  className={classes.input}
                                  value={value}
                                  onChange={({ target: { value } }) =>
                                    this.handleChange(prop.key, value)
                                  }
                                  onBlur={() =>
                                    this.handleSubmit(dispatch, prop.key)
                                  }
                                />
                              );
                            }
                          }[prop.type](prop.key, value)}
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
