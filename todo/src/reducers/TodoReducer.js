export const ADD_TASK = "ADD_TASK";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const REMOVE_COMPLETED = "REMOVE_COMPLETED";

export const initialValues = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
];

export const TodoReducer = (state, action) => {
    switch(action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now(),
                }
            ];

        case TOGGLE_COMPLETED:
            return (
                state.map(todo => {
                    if(action.id === todo.id) {
                        return {
                            ...todo,
                            completed: !todo.completed,
                        }
                    } else {
                        return todo;
                    }
                })
            );

        case REMOVE_COMPLETED:
            return(
                state.filter(todos => todos.completed === false)
            );

        default:
            return state;
    }
}