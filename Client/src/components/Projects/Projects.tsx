import NavBar from "./NavBar";
import ProjectItems from "./ProjectItems";
import Footer from "./Footer";

const Dummy_Projects = [
  {
    id: "p1",
    name: "Psg Tech Coding Club Website1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "p2",
    name: "Psg Tech Coding Club Website2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "p3",
    name: "Psg Tech Coding Club Website3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "p4",
    name: "Psg Tech Coding Club Website4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "p5",
    name: "Psg Tech Coding Club Website5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "p6",
    name: "Psg Tech Coding Club Website6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "p7",
    name: "Psg Tech Coding Club Website7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Projects = () => {
  return (
    <div className="h-screen text-center">
      <NavBar />
      <h1 className="text-4xl font-roboto font-medium">My Projects</h1>
      <div
        style={{ height: "65vh" }}
        className="overflow-x-hidden overflow-y-auto lg:p-10 m-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-20 px-4 md:px-10">
          {Dummy_Projects.map((project) => {
            return (
              <ProjectItems
                key={project.id}
                name={project.name}
                description={project.description}
                id={project.id}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
