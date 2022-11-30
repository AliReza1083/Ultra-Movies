import { Link } from "react-router-dom";

const Button = ({ path }) => {
  return (
    <Link
      to={`/movies/${path}`}
      className="relative px-4 py-2 bg-[#212121] inline-block rounded-md"
    >
      Button
    </Link>
  );
};

export default Button;
