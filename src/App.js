// Simple todo list
// https://medium.com/@aghh1504/1-simple-react-todo-list-52186b62976b
import React from 'react';
import axios from 'axios';
import styles from './App.module.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item: '',
            items: []
        };

        // binding necessary to make 'this' work in callback
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        // get todos remotely
        axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
            const data = res.data;
            const todos = data.map(item => item.title);
            this.setState({items: todos.slice(0, 10)});
        });
    }

    onChange(e) {
        // save entered value
        this.setState({item: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        // append entered value & clear input
        if (this.state.item)
            this.setState({items: [this.state.item, ...this.state.items], item: ''}, () => {  
                console.log('Callback');
                console.log(this.state.items);
            });
    }

    onDelete(key, e) {
        // delete element by key
        let newItems = this.state.items;
        newItems.splice(key, 1);
        this.setState({items: newItems});
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>

                <form onSubmit={this.onSubmit}>
                    <input type="text" onChange={this.onChange} value={this.state.item} />
                    <button className={styles.button}>Submit</button>
                </form>

                <ul>
                    {this.state.items.map((item, key) => (
                        <li key={key} onClick={this.onDelete.bind(this, key)}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}