import React from 'react';
import EmptySection from '../shared/EmptySection';
import { withStyles } from '@material-ui/core';
import Context from '../Context';
const styles = theme => ({});
const Elements = ({ classes }) => (
  <div>
    <Context>
      {({ state, dispatch }) => (
        <div>
          <pre>{JSON.stringify(state, 2, 2)}</pre>
          <form>
            <input id="name" type="text" />
            <input
              type="submit"
              value="add"
              onClick={() =>
                dispatch({
                  type: 'ADD_ACTOR',
                  name: document.getElementById('name').value
                })
              }
            />
          </form>
        </div>
      )}
    </Context>
    <EmptySection
      subtitle="Start by adding an Element."
      buttonText="Add an element"
    />
  </div>
);

export default withStyles(styles)(Elements);
