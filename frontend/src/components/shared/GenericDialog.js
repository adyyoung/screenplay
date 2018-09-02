import React from 'react';
import { Dialog } from '@material-ui/core';

const GenericDialog = ({ children, onDismiss }) => {
  return (
    children && (
      <Dialog
        open={!!children}
        onClose={onDismiss}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {children}
      </Dialog>
    )
  );
};

export default GenericDialog;
