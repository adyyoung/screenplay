import React from 'react';

class LocatorInput extends React.Component {
  handleChange(value) {
    this.props.onChange({ target: { value } });
  }
  render() {
    const { strategy, locator, override } = this.props.value || {};
    const { onBlur, className } = this.props;
    return (
      <div>
        <select
          className={className}
          value={strategy}
          onBlur={onBlur}
          onChange={({ target: { value } }) =>
            this.handleChange({ ...this.props.value, strategy: value })
          }
        >
          <option value="CSS">CSS</option>
          <option value="XPATH">XPath</option>
        </select>
        <input
          type="text"
          className={className}
          onBlur={onBlur}
          onFocus={e => e.target.select()}
          onChange={({ target: { value } }) =>
            this.handleChange({ ...this.props.value, locator: value })
          }
          value={locator || ''}
        />
        <br />

        <input
          type="checkbox"
          className={className}
          onBlur={onBlur}
          onChange={({ target: { checked } }) =>
            this.handleChange({ ...this.props.value, override: checked })
          }
          checked={override || false}
        />
      </div>
    );
  }
}

export default LocatorInput;
