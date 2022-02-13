import { useState } from "react";
import ContactContext from "./contactContext";

const ContactProvider: React.FC = (props) => {
  const [contactIsShown, setContactIsShown] = useState<boolean>(false);
  const showContact = () => {
    setContactIsShown(true);
  };
  const hideContact = () => {
    setContactIsShown(false);
  };

  const contactContext = {
    contactIsShown,
    showContact,
    hideContact,
  };
  return (
    <ContactContext.Provider value={contactContext}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
