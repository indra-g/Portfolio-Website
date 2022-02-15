import React, { useContext } from "react";
import ContactContext from "../../context/contactContext";

import emailLogo from "../../assets/svgs/email.svg";
import githubLogo from "../../assets/svgs/github-brand.svg";
import linkedInLogo from "../../assets/svgs/linkedin-brand.svg";

const Footer = () => {
  const contactCtx = useContext(ContactContext);
  const showContact = () => {
    contactCtx.showContact();
  };
  return (
    <div className="flex justify-center">
      <div className="py-5">
        <p className="my-2 font-roboto px-7">Let's connect</p>
        <div className="flex items-center justify-center space-x-2 py-1">
          <a
            href="https://github.com/indra-g"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="h-6 w-6 md:h-7 md:w-7"
              src={githubLogo}
              alt="githubLogo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/indra-shekar-g-31a3561ba/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="h-6 w-6 md:h-7 md:w-7"
              src={linkedInLogo}
              alt="linkedInLogo"
            />
          </a>
          <button onClick={showContact}>
            <img
              className="h-7 w-7 md:h-8 md:w-8"
              src={emailLogo}
              alt="emailLogo"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
