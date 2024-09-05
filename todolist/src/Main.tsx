import React, { createContext, useReducer } from "react";
import Input from "./Inputs";
import ListDetail from "./ListDetail";
import Footer from "./Footer";
import "./App.css";
import produce from "immer";
import _ from "lodash";

type Action =
  | { type: "Set_Add"; payload: string }
  | { type: "Set_Change"; payload: string }
  | { type: "Set_Delete"; payload: string }
  | { type: "Set_Completed" }
  | { type: "SET_FILTER"; payload: string }
  | { type: "SET_FILTERED_TODO" }
  | { type: "Set_Active_Count"}

interface Todo {
  data: string;
  completed: boolean;
}

interface State {
  todos: Todo[];
  currentValue: string;
  filter: string;
  filteredTodo: Todo[];
  activeCount: number;
}

const initialState: State = {
  todos: [],
  currentValue: "",
  filter: "All",
  filteredTodo: [],
  activeCount: 0,
};

const reducer = produce((state: State, action: Action) => {
  switch (action.type) {
    case "Set_Add":
      state.todos = [
        ...state.todos,
        { data: action.payload, completed: false },
      ];
      state.currentValue = "";
      break;

    case "Set_Change":
      state.todos = _.map(state.todos, (todo) =>
        todo.data === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      break;

    case "Set_Delete":
      state.todos = _.filter(
        state.todos,
        (todo) => todo.data !== action.payload
      );
      break;

    case "Set_Completed":
      state.todos = _.filter(state.todos, (todo) => !todo.completed);
      break;

    case "SET_FILTER":
      state.filter = action.payload;
      break;

    case "SET_FILTERED_TODO":
      switch (state.filter) {
        case "All":
          state.filteredTodo = state.todos;
          break;
        case "Active":
          state.filteredTodo = _.filter(state.todos, (todo) => !todo.completed);
          break;
        case "Complete":
          state.filteredTodo = _.filter(state.todos, (todo) => todo.completed);
          break;
        case "Set_Active_Count":
          state.activeCount =  _.filter(state.todos,(todo) => !todo.completed).length;
          break;
           
        default:
          state.filteredTodo = state.todos;
      }
      break;
  }
});

interface ContextProps {
  state: State;
  SetChange: () => void;
  SetAdd: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  SetTodoChange: (item: Todo) => void;
  SetDelete: (item: Todo) => void;
  Set_Completed: () => void;
  setFilter: (value: string) => void;
  Active_Count: () => void
}

const ToDoListContext = createContext<ContextProps | null>(null);

const Main = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const SetChange = () => {
    dispatch({ type: "Set_Add", payload: state.currentValue });
  };

  const SetAdd = (event: { key: string }) => {
    if (event.key === "Enter") {
      dispatch({ type: "Set_Add", payload: state.currentValue });
    }
  };

  const SetTodoChange = (item: Todo) => {
    dispatch({ type: "Set_Change", payload: item.data });
  };

  const SetDelete = (item: Todo) => {
    dispatch({ type: "Set_Delete", payload: item.data });
  };

  const Set_Completed = () => {
    dispatch({ type: "Set_Completed" });
  };

  const setFilter = (value: string) => {
    dispatch({ type: "SET_FILTER", payload: value });
  };
  const Active_Count = ()  => {
    dispatch({type: "Set_Active_Count"})
  }


  return (
    <div className="Main">
      <h2>todos</h2>
      <ToDoListContext.Provider
        value={{
          state,
          SetChange,
          SetAdd,
          SetTodoChange,
          SetDelete,
          Set_Completed,
          setFilter,
          Active_Count
        }}
      >
        <Input />
        <ListDetail />
        <Footer />
        {children}
      </ToDoListContext.Provider>
    </div>
  );
};

export { Main, ToDoListContext };
