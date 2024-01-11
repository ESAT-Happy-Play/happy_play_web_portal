import React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const CustomDialog = ({ isOpen, title, body, actions }) => {

  return (
    <>
    <Dialog open={ isOpen } >
        <DialogTitle>
          { title }
        </DialogTitle>
        <DialogContent>
            {body}
        </DialogContent>
        <DialogActions>
            {actions}
        </DialogActions>
      </Dialog>
    </>
  )
}

export default CustomDialog
