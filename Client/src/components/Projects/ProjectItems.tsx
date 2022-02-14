import Card from "../UI/Card";

import projectImg from "../../assets/pngs/project.png";
import { Link } from "react-router-dom";

const ProjectItems: React.FC<{
  id: string;
  name: string;
  description: string;
}> = (props) => {
  return (
    <Card>
      <img className="h-52 my-6 m-auto" src={projectImg} alt="projectImg"></img>
      <h1 className="font-medium text-xl mb-8">{props.name}</h1>
      <h1 className="font-normal my-6 mx-2">{props.description}</h1>
      <div className="my-6">
        <Link
          className="text-secondary hover:underline"
          to={`/projectDetail/${props.id}`}
        >
          View Project
        </Link>
      </div>
    </Card>
  );
};
export default ProjectItems;
