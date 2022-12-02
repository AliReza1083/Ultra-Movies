import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import Middle_Links from "./Middle_Links";
import Last_Links from "./Last_Links";

// Images
import { FaImdb } from "react-icons/fa";

const Navbar = () => {
  const [isBg, setIsBg] = useState(false);

  const mouseIn = () => setIsBg(true);
  const mouseOut = () => setIsBg(false);

  return (
    <>
      {isBg && (
        <div className="w-full h-screen fixed top-0 left-0 bg-[#000] bg-opacity-[.3]"></div>
      )}

      <nav
        onMouseEnter={mouseIn}
        onMouseLeave={mouseOut}
        className="fixed top-0 left-0 w-20 h-screen bg-background_2 p-4 flex flex-col justify-between items-center md:-translate-x-full duration-200"
      >
        {/* Logo */}
        <Link to={"/"} className="text-4xl text-[#ffd700]">
          <FaImdb />
        </Link>

        {/* Links */}
        <Middle_Links />

        {/* About */}
        <Last_Links />
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
