// Simple todo list
// https://medium.com/@aghh1504/1-simple-react-todo-list-52186b62976b
import React from 'react';
import axios from 'axios';
import styles from './App.module.css';
// import Button from '@material-ui/core/Button';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: '',
      items: [],
    };

    // binding necessary to make 'this' work in callback
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  render() {
    const { items, item } = this.state;

    return (
      <div>
        <h1>Todo List</h1>

        <form onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onChange} value={item} />
          <button type="submit" className={styles.button}>Submit</button>
        </form>

        <ul>
          {
            items.map((todo) => (
              <li key={todo.key}>
                <button type="button" onClick={() => this.onDelete(todo.key)}>
                  {todo.value}
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
