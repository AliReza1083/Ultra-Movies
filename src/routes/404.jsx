import { ReactComponent as NotFoundSVG } from "../assets/404.svg";
const NotFound = () => {
  return (
    <div className="display h-screen flex justify-center items-center">
      <NotFoundSVG className="h-full w-full max-w-[500px]" />
    </div>
  );
};

export default NotFound;
