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
}

const ListDetail = () => {
  const context = useContext(ToDoListContext);
  const { todos, SetTodoChange, SetDelete, filter } = context as unknown as ListType;

  const filteredTodos = _.filter(todos,(todo) => {
    switch (filter) {
      case "all":
        return true;
      case "active":
        return !todo.completed;
      case "completed":
        return todo.completed;
      default:
        return true;
    }
  });

  return (
    <div className="list">
      {_.map(filteredTodos, (item, i) => (
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
