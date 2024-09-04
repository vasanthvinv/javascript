import React, { useReducer } from "react";
import "./App.css";
import _ from "lodash";

type Action =
  | { type: 'Set_Add'; payload: string }
  | { type: 'Set_Change'; payload: string }
  | { type: 'Set_Delete'; payload: string }
  | { type: 'Set_Filter'; payload: 'all' | 'active' | 'completed' }
  | { type: 'Set_Completed' };

interface Todo {
  data: string;
  completed: boolean;
}

interface State {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
}

const initialState: State = {
  todos: [],
  filter: 'all',
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'Set_Add':
      return {
        ...state,
        todos: [
          ...state.todos,
          { data: action.payload, completed: false },
        ],
      };
    case 'Set_Change':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.data === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case 'Set_Delete':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.data !== action.payload),
      };
    case 'Set_Filter':
      return {
        ...state,
        filter: action.payload,
      };
    case 'Set_Completed':
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed),
      };
    default:
      return state;
  }
};

const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentValue, setCurrentValue] = React.useState<string>("");

  const SetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
  };

  const SetAdd = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch({ type: 'Set_Add', payload: currentValue });
      setCurrentValue("");
    }
  };

  const SetTodoChange = (item: Todo) => {
    dispatch({ type: 'Set_Change', payload: item.data });
  };

  const SetDelete = (item: Todo) => {
    dispatch({ type: 'Set_Delete', payload: item.data });
  };

  const SetFilterChange = (filter: 'all' | 'active' | 'completed') => {
    dispatch({ type: 'Set_Filter', payload: filter });
  };

  const filteredData = state.todos.filter(item => {
    if (state.filter === 'all') return true;
    if (state.filter === 'active') return !item.completed;
    if (state.filter === 'completed') return item.completed;
    return false;
  });

  const activeCount = state.todos.filter(item => !item.completed).length;

  return (
    <div className="Main">
      <h2>todos</h2>
      <div className="inputs">
        <input
          placeholder="What needs to be done?"
          value={currentValue}
          onChange={SetChange}
          onKeyDown={SetAdd}
        />
      </div>
      <div>
        {filteredData.map((item, i) => (
          <div key={i}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => SetTodoChange(item)}
            />
            <span>{item.data}</span>
            <button onClick={() => SetDelete(item)}>X</button>
          </div>
        ))}
      </div>
      <div>
        <span>{activeCount} item left!</span>
        <span>
          <button onClick={() => SetFilterChange('all')}>All</button>
          <button onClick={() => SetFilterChange('active')}>Active</button>
          <button onClick={() => SetFilterChange('completed')}>Completed</button>
        </span>
        <button onClick={() => dispatch({ type: 'Set_Completed' })}>
          Clear completed
        </button>
      </div>
    </div>
  );
};

export default Main;
