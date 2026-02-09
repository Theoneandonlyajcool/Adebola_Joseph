import { HashRouter, Routes, Route } from "react-router-dom";
import IntroPage from "../Pages/IntroPage";
import HomePage from "../Pages/HomePage";
import EducationPage from "../Pages/EducationPage";
import ExperiencePage from "../Pages/ExperiencePage";
import ProjectsPage from "../Pages/ProjectsPage";
import OpenSource from "../Pages/OpenSource";
import ContactPage from "../Pages/ContactPage";
import PageNotFound from "../Pages/PageNotFound";
import ScrollToTop from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";

const Router = () => {
  return (
    <div>
      <ScrollToTop />
      <Analytics />
      <HashRouter>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/opensource" element={<OpenSource />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default Router;
