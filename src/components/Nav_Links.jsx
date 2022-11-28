import { Link } from "react-router-dom";

const NavLinks = ({ path, dataLinks, icons }) => {
  return (
    <Link to={path} className="nav__links" data-links={dataLinks}>
      {icons}
    </Link>
  );
};

export default NavLinks;
