import { useContext } from "react";
import { ToDoListContext } from "./Main";
import _ from 'lodash';
import './App.css';

interface Todo {
  data: string;
  completed: boolean;
}

interface FooterType {
  todos: Todo[];
  Set_Completed: () => void;
  SetFilterChange: (filter: "all" | "active" | "completed") => void;
}

const Footer = () => {
  const context = useContext(ToDoListContext);
  const { todos, Set_Completed, SetFilterChange } = context as unknown as FooterType;

  const activeCount: number = _.filter(todos,(todo) => !todo.completed).length;

  return (
    <div className="fotter">
      <span>{activeCount} item left!</span>
      <span>
        <button onClick={() => SetFilterChange("all")}>All</button>
        <button onClick={() => SetFilterChange("active")}>Active</button>
        <button onClick={() => SetFilterChange("completed")}>Completed</button>
      </span>
      <button onClick={Set_Completed}>Clear completed</button>
    </div>
  );
};

export default Footer;
