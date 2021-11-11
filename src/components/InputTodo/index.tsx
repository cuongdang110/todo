import { useState, memo } from "react";
import "./index.css";
import { v4 as uuidv4 } from 'uuid';
type Props = {
  onAddTodo: (params: {
    title: string;
    category: string;
    complete: boolean;
    id: number | string;
  }) => void;
  onClose: () => void;
};

const InputToDo: React.FC<Props> = ({ onAddTodo, onClose }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="input-container">
      <i onClick={() => onClose()} className="fas fa-times fa-2x"></i>
      <div>
        <h4 className="padding">Todo list</h4>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className=" padding input-text-todo"
          type="text"
        />
        <h4 className="padding">Category</h4>
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="padding input-text-todo"
          type="text"
        />
        <button
          className="padding"
          onClick={() => onAddTodo({ title, category, complete: true , id: uuidv4()})}
        >
          Add to do
        </button>
      </div>
    </div>
  );
};

export default memo(InputToDo);
