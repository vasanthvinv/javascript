import React, { useState } from "react";
import "./App.css";

interface Todo {
  data: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [data, setData] = useState<Todo[]>([{data:'',completed:false}]);
  const [currentValue, setCurrentValue] = useState("");
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
  };

  const handleAdd = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" ) {
        setData((prev) =>[
            ...prev,
        { data: currentValue, completed: false }
      ]);  
        setCurrentValue("");
    }
  };

  const handleTodoChange = (item: Todo) => {
    setData((prev) =>
      prev.map((todo) =>
        todo.data === item.data ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (item: Todo) => {
    setData((prev) => prev.filter((todo) => todo.data !== item.data));
  };

  const handleAll = () => {
    setAll(true);
    setActive(false);
    setCompleted(false);
  };

  const handleActive = () => {
    setAll(false);
    setActive(true);
    setCompleted(false);
  };

  const handleCompleted = () => {
    setAll(false);
    setActive(false);
    setCompleted(true);
  };

  const filteredData = data.filter((item) => {
    if (all) return true;
    if (active) return !item.completed;
    if (completed) return item.completed;
    return false;
  });

  const activeCount = data.filter((item) => !item.completed).length;

  return (
    <div className="App">
      <h2>todos</h2>
      <div className="inputs">
        <input
          placeholder="What needs to be done?"
          value={currentValue}
          onChange={handleChange}
          onKeyDown={handleAdd}
        />
      </div>
      <div>
        {filteredData.map((item, i) => (
          <div key={i}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleTodoChange(item)}
            />
            <span>{item.data}</span>
            <button onClick={() => handleDelete(item)}>X</button>
          </div>
        ))}
      </div>
      <div>
        <span>{activeCount} item left!</span>
        <span>
          <button onClick={handleAll}>All</button>
          <button onClick={handleActive}>Active</button>
          <button onClick={handleCompleted}>Completed</button>
        </span>
        <button
          onClick={() => setData((prev) => prev.filter((todo) => !todo.completed))}
        >
          Clear completed
        </button>
      </div>
    </div>
  );
};

export default App;
