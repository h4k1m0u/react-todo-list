import React from 'react';

function List(props) {
    return (
        <ul>
            {props.items.map((item, key) => <li key={key}>{item}</li>)}
        </ul>
    );
}

export default List;