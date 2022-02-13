import { useContext } from "react";
import ReactDom from "react-dom";
import { CSSTransition } from "react-transition-group";

import BackDrop from "./Backdrop";
import ContactContext from "../../context/contactContext";
import "./Modal.css";

const ModalOverlay: React.FC = (props) => {
  return (
    <div className="fixed z-20 modal">
      <div className="h-full w-full text-center bg-white">{props.children}</div>
    </div>
  );
};

const portalElement: any = document.getElementById("overlays");

const Modal: React.FC = (props) => {
  const contactCtx = useContext(ContactContext);
  const showContact = contactCtx.contactIsShown;

  return (
    <>
      {ReactDom.createPortal(
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={showContact}
          timeout={500}
          classNames="fade-in"
        >
          <BackDrop />
        </CSSTransition>,
        portalElement
      )}
      {ReactDom.createPortal(
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={showContact}
          timeout={500}
          classNames="fade-slide"
        >
          <ModalOverlay>{props.children}</ModalOverlay>
        </CSSTransition>,
        portalElement
      )}
    </>
  );
};
export default Modal;
