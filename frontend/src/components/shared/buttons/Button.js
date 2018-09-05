import React from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import AddIcon from '@material-ui/icons/Add';
const styles = theme => ({
  button: {
    height: 25,
    minWidth: 35,
    padding: 3,
    backgroundColor: '#424242',
    color: 'white',
    borderColor: '#1a1a1a',
    borderRadius: 5,
    '&:hover': {
      backgroundColor: '#7d7d7d',
      borderColor: '#0062cc'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf'
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(123,123,255,.5)'
    }
  },
  iconStyle: {
    height: 18,
    width: 18
  }
});
class Button extends React.Component {
  render() {
    const { classes, icon, onClick, children } = this.props;
    return (
      <button onClick={onClick} className={classes.button}>
        {
          {
            add: <AddIcon className={classes.iconStyle} />
          }[icon]
        }
        {children}
      </button>
    );
  }
}

export default compose(withStyles(styles))(Button);
