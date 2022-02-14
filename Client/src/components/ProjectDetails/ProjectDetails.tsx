import { useParams } from "react-router-dom";

import NavBar from "../Peripherals/NavBar";
import ProjectBody from "./ProjectBody";
import Footer from "../Peripherals/Footer";

const ProjectDetails: React.FC = (props) => {
  const { projectId } = useParams();
  return (
    <>
      <NavBar text="Making ideas come alive on the internet" />
      <ProjectBody />
      <Footer />
    </>
  );
};

export default ProjectDetails;
