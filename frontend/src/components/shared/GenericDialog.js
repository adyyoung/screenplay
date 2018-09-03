import React from 'react';
import { Dialog } from '@material-ui/core';
import Context from '../Context';

const GenericDialog = ({ children, onDismiss }) => {
  return (
    <Context.Consumer>
      {({ setDialog, dialog }) =>
        dialog && (
          <Dialog
            open={!!dialog}
            onClose={() => setDialog(null)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            {dialog}
          </Dialog>
        )
      }
    </Context.Consumer>
  );
};

export default GenericDialog;
