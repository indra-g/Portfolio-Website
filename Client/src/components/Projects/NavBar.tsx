import { Link } from "react-router-dom";

import logo from "../../assets/svgs/logo.svg";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex justify-evenly items-center h-max mt-4 w-screen lg:w-1/2">
        <img src={logo} alt={logo} />
        <div className="flex">
          <button className="flex my-10 mx-2 md:m-10 font-regular space-x-2 text-gray-700  font-roboto items-center">
            <LayersOutlinedIcon />
            <h6>Projects</h6>
          </button>
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
        Bringing ideas of life
      </p>
    </nav>
  );
};

export default NavBar;
