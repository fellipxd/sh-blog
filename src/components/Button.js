import { Link } from "react-router-dom";

const Button = ({ text, link, primary }) => {
  return (
    <div>
      <button
        className={
          primary
            ? "py-[10px] px-5 cursor-pointer bg-white border border-solid border-teal-700 text-teal-700 hover:border-white hover:bg-green-100 hover:text-black"
            : "py-[10px] px-5 cursor-pointer bg-teal-700 border border-solid border-teal-700 text-white hover:border-teal-700 hover:bg-white hover:text-teal-700"
        }
      >
        <Link to={link}>{text}</Link>
      </button>
    </div>
  );
};

export default Button;
