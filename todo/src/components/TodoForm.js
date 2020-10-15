import React, { useReducer, useState } from 'react';
import { ADD_TASK, initialValues, REMOVE_COMPLETED, TodoReducer, TOGGLE_COMPLETED } from '../reducers/TodoReducer';
import TodoList from './TodoList';

const TodoForm = () => {
    const [task, setTask] = useState('');
    const [state, dispatch] = useReducer(TodoReducer, initialValues);

    const toggleTodo = (id) => {
        dispatch({type: TOGGLE_COMPLETED, id: id});
    }

    const removeTodo = e => {
        e.preventDefault();
        dispatch({type: REMOVE_COMPLETED});
    }

    const changeHandler = e => {
        setTask(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
        setTask('');
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <input type='text' name='task' value={task} onChange={changeHandler} />
                <button type='submit' onClick={e => {
                    dispatch({type: ADD_TASK, payload: task})
                }}>Submit</button>
                <button onClick={removeTodo}>Clear tasks</button>
            </form>
            <TodoList state={state} toggleTodo={toggleTodo} />
        </div>
    )

}

export default TodoForm;