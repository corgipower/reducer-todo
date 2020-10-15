import React from 'react';
import './Todo.css'

const TodoList = props => {
    return (
        <div>
            {props.state.map(todo => (
                <p className={todo.completed ? 'completed' : ''}
                key={todo.id}
            onClick={() => props.toggleTodo(todo.id)}>{todo.item}</p>
            ))}
        </div>
    )
}

export default TodoList;