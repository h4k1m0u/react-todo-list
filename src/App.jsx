// Simple todo list
// https://medium.com/@aghh1504/1-simple-react-todo-list-52186b62976b
import React from 'react';
import axios from 'axios';
import {
  List,
  CssBaseline,
} from '@material-ui/core';
import Header from './components/Header';
import Todo from './components/Todo';
import DialogAdd from './components/DialogAdd';

class App extends React.Component {
  constructor(props) {
    super(props);

    // init state variables
    this.state = {
      item: '',
      items: [],
      open: false,
    };

    // binding necessary to make 'this' work in callback
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  componentDidMount() {
    // get todos remotely
    axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
      const { data } = res;
      const todos = data.map((item) => item.title);
      const items = todos.slice(0, 10).map((v, k) => ({
        key: k,
        value: v,
      }));

      this.setState({
        items,
      });
    });
  }

  onChange(e) {
    // save entered value
    this.setState({
      item: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    // append entered value & clear input
    const { items, item } = this.state;
    const keys = items.map((todo) => todo.key);
    const maxKey = Math.max(...keys);

    if (item) {
      this.setState({
        items: [
          {
            key: maxKey + 1,
            value: item,
          },
          ...items,
        ],
        item: '',
      });
    }

    // close dialog
    this.onClose();
  }

  onDelete(key) {
    // delete element by key
    const { items } = this.state;
    const keys = items.map((todo) => todo.key);
    const index = keys.indexOf(key);

    items.splice(index, 1);
    this.setState({
      items,
    });
  }

  onAdd() {
    // show dialog
    this.setState({
      open: true,
    });
  }

  onClose() {
    // close dialog
    this.setState({
      open: false,
    });
  }

  render() {
    const { items, open } = this.state;

    return (
      <>
        <CssBaseline />
        <Header appName="Todo-list" onAdd={this.onAdd} />

        <List component="nav">
          {
            items.map((todo) => (
              <Todo key={todo.key} todo={todo} onDelete={this.onDelete} />
            ))
          }
        </List>

        <DialogAdd
          open={open}
          onClose={this.onClose}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </>
    );
  }
}

export default App;
