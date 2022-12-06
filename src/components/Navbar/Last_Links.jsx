import NavLinks from "./Nav_Links";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "../../context/User";

import { BsInfoCircleFill } from "react-icons/bs";
import { GoSignIn } from "react-icons/go";

const Last_Links = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div>
      <NavLinks
        path={"/about"}
        dataLinks="about"
        icons={<BsInfoCircleFill />}
      />
      {currentUser == null ? (
        <NavLinks
          path={"/authentication"}
          dataLinks="Sign Up/In"
          icons={<GoSignIn />}
        />
      ) : (
        <Link
          to="/authentication"
          className="nav__links inline-block hover:bg-[#121212] rounded-lg"
          data-links={currentUser.displayName}
        >
          <img className="rounded-full" src={currentUser.photoURL} alt="" />
        </Link>
      )}
    </div>
  );
};

export default Last_Links;
