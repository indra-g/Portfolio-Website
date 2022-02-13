import { useContext } from "react";

import ContactContext from "../../context/contactContext";

const BackDrop = () => {
  const contactCtx = useContext(ContactContext);
  const hideContact = () => {
    contactCtx.hideContact();
  };

  return (
    <div
      onClick={hideContact}
      className="fixed h-screen w-screen z-10 bg-backdrop"
    />
  );
};

export default BackDrop;
