import React, {useState, useReducer} from 'react';
import {initialState, TodoListReducer, TOGGLE_COMPLETED, ADD_TASK} from '../reducers/TodoListReducer';

function TodoForm() {
    const [task, setTask] = useState('')

    const [state, dispatch] = useReducer(TodoListReducer, initialState);

    const removeCompleted = (e) => {
        e.preventDefault();
        setTask(task.filter(item => item.completed === false));
    }

    console.log(task)

    return(
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type='text' name='task' value={task} onChange={(e) => setTask({task: e.target.value})} />
                <button type='submit' onClick={(e) => {
                    dispatch({type: ADD_TASK, payload: task})
                }}>Submit</button>
                <button onClick={removeCompleted}>Clear completed</button>
            </form>
        </div>
    )
}

export default TodoForm;