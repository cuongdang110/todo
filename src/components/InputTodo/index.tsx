import { useState, memo } from "react";
import "./index.css";

type Props = {
  onSubmit: (params: {
    title: string;
    category: string;
    complete: boolean;
  }) => void;
  onClose: () => void;
};

const InputToDo: React.FC<Props> = ({ onSubmit, onClose }) => {
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
          onClick={() => onSubmit({ title, category, complete: true })}
        >
          Add to do
        </button>
      </div>
    </div>
  );
};

export default memo(InputToDo);
