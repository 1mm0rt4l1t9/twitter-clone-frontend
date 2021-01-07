import React from 'react';
import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

interface IProps {
  title: string;
  visibleModal: boolean;
  handleModalClose: () => void;
  children: React.ReactNode;
}

const DialogBlock: React.FC<IProps> = ({ title, visibleModal, handleModalClose, children }) => {
  return (
    <Dialog open={visibleModal} onClose={handleModalClose}>
      <DialogTitle>
        <IconButton onClick={handleModalClose} color="secondary">
          <CloseIcon style={{ fontSize: 26 }} color="primary" />
        </IconButton>

        <Typography variant="h5">
          <b>{title}</b>
        </Typography>
      </DialogTitle>

      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DialogBlock;
