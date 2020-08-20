import React, {useState, useReducer} from 'react';
import {initialState, TodoListReducer, ADD_TASK, TOGGLE_COMPLETED, REMOVE_COMPLETED} from '../reducers/TodoListReducer';
import TodoList from './TodoList';

function TodoForm() {
    const [task, setTask] = useState('')

    const [state, dispatch] = useReducer(TodoListReducer, initialState);

    const toggle = (id) => {
        dispatch({type: TOGGLE_COMPLETED, id: id})
    }

    const removeCompleted = (e) => {
        e.preventDefault();
        dispatch({type: REMOVE_COMPLETED})
    }

    const changeHandler = (e) => {
        setTask(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setTask('')
        console.log(state)
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <input type='text' name='task' value={task} onChange={changeHandler} />
                <button type='submit' onClick={(e) => {
                    dispatch({type: ADD_TASK, payload: task})
                }}>Submit</button>
                <button onClick={removeCompleted}>Clear completed</button>
            </form>
            <div>
                <TodoList task={state} toggle={toggle} />
            </div>
        </div>
    )
}

export default TodoForm;