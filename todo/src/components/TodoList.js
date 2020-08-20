import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return(
        <div>
            <Todo task={props.task} toggle={props.toggle} />
        </div>
    )
}

export default TodoList;