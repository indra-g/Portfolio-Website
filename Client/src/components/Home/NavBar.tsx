import { Link } from "react-router-dom";

import logo from "../../assets/svgs/logo.svg";
import projectsIcon from "../../assets/svgs/projects-icon.svg";
import emailIcon from "../../assets/svgs/email-icon.svg";

const NavBar: React.FC = () => {
  return (
    <>
      <nav
        className="flex text-center justify-evenly items-center h-max my-4"
      >
        <img className="lg:m-10" src={logo} alt={logo} />
        <div className="flex mx-5">
          <Link
            to="/projects"
            className="flex my-10 mx-2 md:m-10 text-gray-400 font-regular hover:text-gray-700 transition duration-300 font-roboto"
          >
            <img className="mr-2" src={projectsIcon} alt="ProjectsIcon"></img>
            Projects
          </Link>
          <button  className="flex my-10 mx-2 md:mx-10 font-regular space-x-2 text-gray-400 hover:text-gray-700 transition duration-300 font-roboto">
            <img className="mr-2" src={emailIcon} alt="contactIcon" />
            Contact
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
