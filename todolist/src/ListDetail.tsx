import  { useContext } from "react";
import _ from "lodash";
import { ToDoListContext } from "./Main";
import './App.css';


interface Todo {
  data: string;
  completed: boolean;
}

interface ListType {
  todos: Todo[];
  SetTodoChange: (item: Todo) => void;
  SetDelete: (item: Todo) => void;
  filter: "all" | "active" | "completed";
  setFilter: Todo[];
}

const ListDetail = () => {
  const context = useContext(ToDoListContext);
  const { SetTodoChange, SetDelete, setFilter } = context as unknown as  ListType;

  return (
    <div className="list">
      {_.map(setFilter, (item, i) => (
        <div key={i}>
          <input
          className="checkbox"
            type="checkbox"
            checked={item.completed}
            onChange={() => SetTodoChange(item)}
          />
          <span>{item.data}</span>
          <button onClick={() => SetDelete(item)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default ListDetail;
