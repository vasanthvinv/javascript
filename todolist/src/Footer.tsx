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
  setFilter: (filter: "All" | "Active" | "Complete") => void;
}

const Footer = () => {
  const context = useContext(ToDoListContext);
  const { todos, Set_Completed, setFilter } = context as unknown as FooterType;

  const activeCount: number = _.filter(todos,(todo) => !todo.completed).length;

  return (
    <div className="fotter">
      <span>{activeCount} item left!</span>
      <span>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Active")}>Active</button>
        <button onClick={() => setFilter("Complete")}>Completed</button>
      </span>
      <button onClick={Set_Completed}>Clear completed</button>
    </div>
  );
};

export default Footer;
