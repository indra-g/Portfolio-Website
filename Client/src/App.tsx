import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projectDetail/:projectId" element={<ProjectDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
