import React, { useContext } from "react";
import ContactContext from "../../context/contactContext";
import CloseIcon from "@mui/icons-material/Close";

import ContactForm from "./ContactForm";
import gitHubLogo from "../../assets/svgs/github-brand.svg";
import linkedInLogo from "../../assets/svgs/linkedin-brand.svg";
import Modal from "../Modal/Modal";

const Contact: React.FC = () => {
  const contactCtx = useContext(ContactContext);
  const hideContact = () => {
    contactCtx.hideContact();
  };
  return (
    <Modal>
      <div className="text-right">
        <button
          className="text-gray-400 hover:text-gray-700 transition duration-300"
          onClick={hideContact}
        >
          <CloseIcon />
        </button>
      </div>
      <h1 className="text-2xl lg:text-3xl font-roboto py-1">Get In Touch</h1>
      <p className="text-sm lg:text-base font-roboto py-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <ContactForm />
      <div className="flex space-x-2 justify-center pt-5 pb-2">
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
    </Modal>
  );
};

export default Contact;
