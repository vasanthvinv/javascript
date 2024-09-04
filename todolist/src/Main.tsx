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
  | { type: "Set_Completed" };

interface Todo {
  data: string;
  completed: boolean;
}

interface State {
  todos: Todo[];
  currentValue: string;
}

const initialState: State = {
  todos: [],
  currentValue: "",
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
  }
});

interface ContextProps {
  state: State;
  SetChange: () => void;
  SetAdd: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  SetTodoChange: (item: Todo) => void;
  SetDelete: (item: Todo) => void;
  Set_Completed: () => void;
}

const ToDoListContext = createContext<ContextProps | undefined>(undefined);

const Main: ({ children }: { children: any }) => JSX.Element = ({
  children,
}) => {
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
