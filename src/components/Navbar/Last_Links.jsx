import NavLinks from "./Nav_Links";

import { BsInfoCircleFill } from "react-icons/bs";
import { GoSignIn } from "react-icons/go";

const Last_Links = () => {
  return (
    <div>
      <NavLinks
        path={"/about"}
        dataLinks="about"
        icons={<BsInfoCircleFill />}
      />
      <NavLinks
        path={"/authentication"}
        dataLinks="Sign Up/In"
        icons={<GoSignIn />}
      />
    </div>
  );
};

export default Last_Links;
