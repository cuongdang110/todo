import { useState } from "react";
import "./index.css";
interface Props {
  handleOpenEdit: () => void;
  handleEditData: (param: any) => void;
}
const EditData: React.FC<Props> = ( { handleOpenEdit, handleEditData }) => {
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  return (
    <div className="wrapper-edit">
      <h2>Edit Your Todo</h2>
      <i onClick={handleOpenEdit} className="close-edit fas fa-times fa-2x"></i>
      <input value={title} onChange={e => setTitle(e.target.value)} type="text" />
      <input value={subTitle} onChange={e => setSubTitle(e.target.value)} type="text" />
      <button onClick={() => handleEditData({title, subTitle})} className="edit-todo">Edit</button>
    </div>
  );
};

export default EditData;
