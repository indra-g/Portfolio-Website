import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ContactContext from "../../../context/contactContext";

import logo from "../../../assets/svgs/logo.svg";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const NavBar: React.FC = () => {
  const contactCtx = useContext(ContactContext);
  const showContact = () => {
    contactCtx.showContact();
  };

  return (
    <>
      <nav className="flex justify-evenly items-center h-max my-4">
        <Link to="/">
          <img src={logo} alt={logo} />
        </Link>
        <div className="flex">
          <Link
            to="/projects"
            className="flex my-10 mx-2 md:m-10 text-gray-400 font-regular space-x-2 hover:text-gray-700 transition duration-300 font-roboto items-center"
          >
            <LayersOutlinedIcon />
            <h6>Projects</h6>
          </Link>
          <button
            onClick={showContact}
            className="flex my-10 mx-2 md:mx-10 font-regular space-x-2 text-gray-400 hover:text-gray-700 transition duration-300 font-roboto "
          >
            <EmailOutlinedIcon />
            <h6>Contact</h6>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
