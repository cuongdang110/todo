import "./index.css";
import moment from "moment";
export interface Props {
  lengComplete: number;
  lengInComplete: number;
}

const Header: React.FC<Props> = ({ lengComplete, lengInComplete }) => {
  const date = moment().format("MMMM Do YYYY");
  return (
    <div className="heading">
      <h1>{date}</h1>
      <span>{lengComplete} incomplete,</span>
      <span>{lengInComplete} completed</span>
    </div>
  );
};

export default Header;
