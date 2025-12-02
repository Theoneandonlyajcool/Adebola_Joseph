import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import EducationPage from "../Pages/EducationPage";
import ExperiencePage from "../Pages/ExperiencePage";
import ProjectsPage from "../Pages/ProjectsPage";
import OpenSource from "../Pages/OpenSource";
import ContactPage from "../Pages/ContactPage";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/opensource" element={<OpenSource />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
