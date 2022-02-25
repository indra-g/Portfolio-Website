import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import useHttp from "../../hooks/useHttp";

import NavBar from "../Peripherals/NavBar";
import ProjectItems from "./ProjectItems";
import Footer from "../Peripherals/Footer";

const Projects = () => {
  const { error, isLoading, getdata, data }: any = useHttp();

  useEffect(() => {
    getdata("/api/getProjects");
  }, [getdata]);

  let content;
  let projects;

  if (error) {
    content = (
      <h1 className="font-roboto font-medium text-2xl">Something went wrong</h1>
    );
  }
  if (isLoading) {
    content = <CircularProgress />;
  }
  if (data) {
    projects = data.map(
      (project: {
        id: string;
        name: string;
        summary: string;
        img1: string;
        imgMain: string;
      }) => (
        <ProjectItems
          key={project.id}
          img={project.img1 || project.imgMain}
          name={project.name}
          description={project.summary}
          id={project.id}
        />
      )
    );
  }

  return (
    <>
      <div style={{ minHeight: "calc(100vh - 116px)" }} className="text-center">
        <NavBar text="Bringing ideas of life" />
        <h1 className="text-3xl md:text-4xl font-roboto font-medium">
          My Projects
        </h1>
        {!projects && (
          <div
            style={{ minHeight: "65vh" }}
            className="flex justify-center items-center"
          >
            {content}
          </div>
        )}

        {projects && (
          <div className="lg:p-10 m-5">
            <div className="grid grid-cols-1 md:grid-cols-2 text-center lg:grid-cols-3 gap-5 lg:gap-20 px-4 md:px-10">
              {projects}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Projects;
