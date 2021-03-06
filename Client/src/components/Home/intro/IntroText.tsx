import { Link } from "react-scroll";

import line from "../../../assets/svgs/line.svg";
import gitHubLogo from "../../../assets/svgs/github-brand.svg";
import linkedInLogo from "../../../assets/svgs/linkedin-brand.svg";
import scrollButton from "../../../assets/svgs/scroll-button.svg";

const IntroText = () => {
  return (
    <>
      <div className="mx-auto my-auto">
        <div className="flex space-x-4">
          <img className="py-4" src={line} alt="line" />
          <h6 className="text-primary font-roboto py-4">Indra Shekar G</h6>
        </div>
        <h1 className="font-roboto font-medium text-5xl md:text-7xl lg:text-6xl leading-tight">
          Hello, my <br />
          name’s Indra.
          <br /> I’m a Web <br />
          Developer.
        </h1>
        <h6 className="font-roboto text-gray-400 py-4 pl-2">
          Web Design Reimagined
        </h6>
      </div>
      <div className="flex items-center justify-around mb-14">
        <Link to="whatIDo" duration={1800} spy={true} smooth={true}>
          <div className="flex items-center space-x-4">
            <button className="rounded-full shadow-xl p-4 hover:shadow-md transition duration-300">
              <img
                className="text-7xl"
                src={scrollButton}
                alt="scrollButton"
              ></img>
            </button>
            <h5 className="text-gray-500">Scroll down</h5>
          </div>
        </Link>
        <div className="flex space-x-2">
          <a
            href="https://github.com/indra-g"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={gitHubLogo} className="h-7 w-7" alt="githubLogo" />
          </a>
          <a
            href="https://www.linkedin.com/in/indra-shekar-g-31a3561ba/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={linkedInLogo} className="h-7 w-7" alt="linkedInLogo" />
          </a>
        </div>
      </div>
    </>
  );
};
export default IntroText;
