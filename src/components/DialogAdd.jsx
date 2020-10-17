import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const DialogAdd = ({
  open,
  onClose,
  onChange,
  onSubmit,
}) => (
  <Dialog
    open={open}
  >
    <DialogTitle>
      Add a new todo
    </DialogTitle>
    <DialogContent>
      <TextField
        fullWidth
        label="Todo"
        onChange={onChange}
      />
    </DialogContent>
    <DialogActions>
      <Button
        variant="contained"
        color="primary"
        onClick={onClose}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={onSubmit}
      >
        Submit
      </Button>
    </DialogActions>
  </Dialog>
);

// props validation
DialogAdd.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};
DialogAdd.defaultProps = {
  open: false,
  onClose: () => {},
  onChange: () => {},
  onSubmit: () => {},
};

export default DialogAdd;
