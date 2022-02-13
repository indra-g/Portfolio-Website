import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ContactProvider from "./context/ContactProvider";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <ContactProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContactProvider>,
  document.getElementById("root")
);
