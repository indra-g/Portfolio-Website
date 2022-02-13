import React from "react";

type contacttype = {
  contactIsShown: boolean;
  showContact: () => void;
  hideContact: () => void;
};

const ContactContext = React.createContext<contacttype>({
  contactIsShown: false,
  showContact: () => {},
  hideContact: () => {},
});

export default ContactContext;
