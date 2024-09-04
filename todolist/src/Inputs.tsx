import  { useContext } from "react";
import { ToDoListContext } from "./Main";

interface InputType {
 state:{ currentValue: string;};
  SetChange: () => void;
  SetAdd: () => void;
 
}

const Input = () => {
  const context = useContext(ToDoListContext);
  const { state, SetChange, SetAdd } = context as unknown as InputType;

  return (
    <div className="inputs">
      <input
        placeholder="What needs to be done?"
        value={state.currentValue}
        onChange={SetChange}
        onKeyDown={SetAdd}
      />
    </div>
  );
};

export default Input;
