// Simple todo list
// https://medium.com/@aghh1504/1-simple-react-todo-list-52186b62976b
import React from 'react';
import styles from './App.module.css';
import List from './List.js';

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

    onChange(e) {
        // save entered value
        this.setState({item: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        // append entered value & clear input
        if (this.state.item)
            this.setState({items: [...this.state.items, this.state.item], item: ''}, () => {  
                console.log('Callback');
                console.log(this.state.items);
            });
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>

                <form onSubmit={this.onSubmit}>
                    <input type="text" onChange={this.onChange} value={this.state.item} />
                    <button className={styles.button}>Submit</button>
                </form>

                <List items={this.state.items} />
            </div>
        );
    }
}