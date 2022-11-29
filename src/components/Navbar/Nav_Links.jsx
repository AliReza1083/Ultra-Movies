import { Link, useLocation } from "react-router-dom";

const NavLinks = ({ path, dataLinks, icons }) => {
  const location = useLocation();

  return (
    <Link
      to={path}
      className={`nav__links ${
        path == location.pathname ? "bg-[#121212] text-secondary" : ""
      }`}
      data-links={dataLinks}
    >
      {icons}
    </Link>
  );
};

export default NavLinks;
