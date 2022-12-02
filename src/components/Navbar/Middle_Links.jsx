import NavLinks from "./Nav_Links";

import { AiFillHome } from "react-icons/ai";
import { BiFilm } from "react-icons/bi";
import { FaTrailer, FaPlus } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const Middle_Links = () => {
  return (
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
  );
};

export default Middle_Links;
