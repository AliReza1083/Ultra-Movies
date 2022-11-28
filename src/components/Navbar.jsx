import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

import NavLinks from "./Nav_Links";

// Images
import { FaImdb } from "react-icons/fa";

// Icons
import { AiFillHome } from "react-icons/ai";
import { BiFilm } from "react-icons/bi";
import { FaTrailer, FaPlus } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { BsInfoCircleFill } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
  const [isBg, setIsBg] = useState(false);

  const mouseIn = () => setIsBg(true);
  const mouseOut = () => setIsBg(false);

  return (
    <>
      {isBg && (
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.25 }}
          className="w-full h-screen fixed top-0 left-0 bg-[#000] bg-opacity-[.6] backdrop-blur-sm"
        ></motion.div>
      )}

      <nav
        onMouseEnter={mouseIn}
        onMouseLeave={mouseOut}
        className="fixed top-0 left-0 w-20 h-screen bg-background_2 p-4 flex flex-col justify-between items-center"
      >
        {/* Logo */}
        <Link to={"/"} className="text-4xl text-[#ffd700]">
          <FaImdb />
        </Link>

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
