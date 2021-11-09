import "./index.css";
import moment from "moment";
export interface Props {
  inComplete: any[];
  complete: any[];
}

const Header: React.FC<Props> = ({ inComplete, complete }) => {
  const test = moment().format("MMMM Do YYYY");
  return (
    <div className="heading">
      <h1>{test}</h1>
      <span>{inComplete.length} incomplete,</span>
      <span>{complete.length} completed</span>
    </div>
  );
};

export default Header;
