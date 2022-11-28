import { Link, Outlet } from "react-router-dom";

import NavLinks from "./Nav_Links";

// Images
import Logo from "../assets/logo.png";

// Icons
import { AiFillHome } from "react-icons/ai";
import { BiFilm } from "react-icons/bi";
import { FaTrailer, FaPlus } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { BsInfoCircleFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-20 h-screen bg-background_2 p-4 flex flex-col justify-between items-center">
        {/* Logo */}
        <img src={Logo} alt="" width={"100%"} />

        {/* Links */}
        <div>
          <NavLinks
            path={"/"}
            dataLinks="Return to Home Page"
            icons={<AiFillHome />}
          />
          <NavLinks
            path={"/movies"}
            dataLinks="See all the Movies"
            icons={<BiFilm />}
          />
          <NavLinks
            path={"/date"}
            dataLinks="See all the Movies based on the year"
            icons={<MdDateRange />}
          />
          <NavLinks
            path={"/trailers"}
            dataLinks="See all the Trailers"
            icons={<FaTrailer />}
          />
          <NavLinks
            path={"/add-movie"}
            dataLinks="Add your Movie"
            icons={<FaPlus />}
          />
        </div>

        {/* About */}
        <NavLinks
          path={"/about"}
          dataLinks="about"
          icons={<BsInfoCircleFill />}
        />
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
