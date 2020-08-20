import React from 'react';
import './Todo.css';

function Todo(props) {
    return(
        <div>
            {props.task.map(tasks => ( 
                <p className={tasks.completed ? 'completed' : ''} 
                   key={tasks.id}
                   onClick={() => props.toggle(tasks.id)} >{tasks.task}
                   </p>
            ))}
        </div>
    )
}

export default Todo;