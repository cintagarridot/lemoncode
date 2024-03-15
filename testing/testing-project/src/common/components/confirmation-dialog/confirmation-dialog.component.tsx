import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { ConfirmationDialogProps } from './confirmation-dialog.vm';


export const ConfirmationDialogComponent: React.FunctionComponent<ConfirmationDialogProps> = (
  props
) => {
  const { isOpen, onAccept, onClose, title, labels, children } = props;

  const handleAccept = () => {
    onAccept();
    onClose();
  };

  return (
    <Dialog open={isOpen}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} data-testid="close-button" color="secondary" variant="contained">
          {labels.closeButton}
        </Button>
        <Button onClick={handleAccept} data-testid="accept-button" color="primary" variant="contained">
          {labels.acceptButton}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
