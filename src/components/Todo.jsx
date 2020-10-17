import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';

const Todo = ({ onDelete, todo: { key, value } }) => (
  <ListItem button onClick={() => onDelete(key)}>
    <ListItemText primary={value} />
  </ListItem>
);

// props validation
Todo.propTypes = {
  onDelete: PropTypes.func,
  todo: PropTypes.shape({
    key: PropTypes.number,
    value: PropTypes.string,
  }),
};
Todo.defaultProps = {
  onDelete: () => {},
  todo: {
    key: 0,
    value: '',
  },
};

export default Todo;
