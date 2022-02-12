import { Link } from "react-router-dom";

import logo from "../../../assets/svgs/logo.svg";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const NavBar: React.FC = () => {
  return (
    <>
      <nav className="flex justify-evenly items-center h-max my-4">
        <img src={logo} alt={logo} />
        <div className="flex">
          <Link
            to="/projects"
            className="flex my-10 mx-2 md:m-10 text-gray-400 font-regular space-x-2 hover:text-gray-700 transition duration-300 font-roboto"
          >
            <LayersOutlinedIcon />
            <span>Projects</span>
          </Link>
          <button className="flex my-10 mx-2 md:mx-10 font-regular space-x-2 text-gray-400 hover:text-gray-700 transition duration-300 font-roboto">
            <EmailOutlinedIcon />
            <span>Contact</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
