import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { AddCircle } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

const Header = ({ appName, onAdd }) => {
  // hooks
  const styles = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={styles.title}>
            { appName }
          </Typography>
          <IconButton
            color="inherit"
            onClick={onAdd}
          >
            <AddCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

// avoids eslint warning about props
Header.propTypes = {
  appName: PropTypes.string,
  onAdd: PropTypes.func,
};
Header.defaultProps = {
  appName: 'My App',
  onAdd: () => {},
};

export default Header;
