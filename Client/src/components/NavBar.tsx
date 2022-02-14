import { NavLink, Link } from "react-router-dom";

import logo from "../assets/svgs/logo.svg";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const NavBar: React.FC<{ text: string }> = (props) => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex justify-evenly items-center h-max mt-4 w-screen lg:w-1/2">
        <Link to="/">
          <img src={logo} alt={logo} />
        </Link>
        <div className="flex">
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "text-gray-700"
                : "text-gray-400 hover:text-gray-700 transition duration-300 font-regular"
            }
            to="/projects"
          >
            <button className="flex my-10 mx-2 md:m-10 font-regular space-x-2 font-roboto items-center">
              <LayersOutlinedIcon />
              <h6>Projects</h6>
            </button>
          </NavLink>
          <Link
            to="/"
            className="flex my-10 mx-2 md:mx-10 font-regular space-x-2 text-gray-400 hover:text-gray-700 transition duration-300 font-roboto"
          >
            <HomeOutlinedIcon />
            <h6>Home</h6>
          </Link>
        </div>
      </div>
      <p className="hidden lg:flex text-gray-400 hover:text-gray-700 transition duration-300 font-roboto mr-16">
        {props.text}
      </p>
    </nav>
  );
};

export default NavBar;
