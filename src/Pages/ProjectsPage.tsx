import Header from "@/components/Header";
import KwikQImage from "/Images/KwikQ.png";
import DevbyteImage from "/Images/Devbyte.png";
import EazytranzzImage from "/Images/EazyTranzz.png";
import Footer from "@/components/Footer";
import ProdModal from "@/components/ProdModal";
import { useState } from "react";
import { motion } from "motion/react";
import MindMap from "@/components/MindMap";
import WeatheraAppImage from "@/assets/images/WeatherApp.png";
import OkoAiImage from "@/assets/images/OkoAI_Image.png";
import ClrlcImage from "@/assets/images/Clrlc.png";
import TaskForgeImage from "@/assets/images/TaskForgeImage.png";

type Project = {
  image: string;
  status: "in_production" | "done";
  projectName: string;
  color: string;
  desc: string;
  role: string;
  liveLink: string;
  languaguesUsed: string[];
};

const ProjectsPage = () => {
  const [showProdModal, SetshowProdModal] = useState(false);
  const [prodLink, SetprodLink] = useState("");
  // const [cardSkillColor, SetCardSkillColor] = useState("");

  const projectsByCategory: Array<{
    title: string;
    key: "live" | "community" | "personal";
    projects: Project[];
  }> = [
    {
      title: "Live projects",
      key: "live",
      projects: [
        {
          image: EazytranzzImage,
          status: "done",
          projectName: "Eazy Tranz",
          color: "#9c1260",
          desc: "Eazytranz connects freelancers and remote workers with clients globally, ensuring swift and secure payments.",
          role: "Front-end / Team lead",
          liveLink: "https://eazytranz.com/",
          languaguesUsed: [
            "React",
            "TypeScript",
            "Rest API",
            "Tailwind CSS",
            "Axios",
            "Shadcn UI",
            "Zustand",
            "react-hook-form",
          ],
        },
        {
          image: OkoAiImage,
          status: "done",
          projectName: "Oko AI",
          color: "#00a63e",
          desc: "An AI-powered agritech platform empowering African farmers with data-driven tools and market access",
          role: "Front-end Developer",
          liveLink: "https://okoai.africa/",
          languaguesUsed: [
            "Next.js",
            "TypeScript",
            "Rest API",
            "Tailwind CSS",
            "Axios",
            "Material UI",
            "Shadcn UI",
            "sonner",
            "react-hook-form",
            "zod ",
          ],
        },
        {
          image: ClrlcImage,
          status: "done",
          projectName: "CLRLC",
          color: "#1a273a",
          desc: "Center for Low-Resource Languages & Cultures (CLRLC) is a global ecosystem dedicated to democratizing Artificial Intelligence through ethical data curation, inclusive research, and community-driven innovation.",
          role: "Lead Engineer",
          liveLink: "https://www.clrlc.org/",
          languaguesUsed: [
            "Next.js",
            "TypeScript",
            "Rest API",
            "Tailwind CSS",
            "Shadcn UI",
            "sonner",
            "react-hook-form",
            "Framer Motion",
            "Lucide react",
            "Zod",
          ],
        },
      ],
    },
    {
      title: "Community projects",
      key: "community",
      projects: [
        {
          image: DevbyteImage,
          status: "done",
          projectName: "Devbyte community",
          color: "#1a1d2e",
          desc: "A tech community empowering developers through collaboration, open source contributions, knowledge sharing, and impactful projects (Learn, Connect, Innovate!)",
          role: "Front-end Developer",
          liveLink: "https://community-website-frontend-five.vercel.app/",
          languaguesUsed: [
            "React",
            "Rest API",
            "Tailwind CSS",
            "Axios",
            "Material UI",
            "Shadcn UI",
            "Redux",
          ],
        },
        {
          image: ClrlcImage,
          status: "done",
          projectName: "CLRLC",
          color: "#1a273a",
          desc: "Center for Low-Resource Languages & Cultures (CLRLC) is a global ecosystem dedicated to democratizing Artificial Intelligence through ethical data curation, inclusive research, and community-driven innovation.",
          role: "Lead Engineer",
          liveLink: "https://www.clrlc.org/",
          languaguesUsed: [
            "Next.js",
            "TypeScript",
            "Rest API",
            "Tailwind CSS",
            "Shadcn UI",
            "sonner",
            "react-hook-form",
            "Framer Motion",
            "Lucide react",
            "Zod",
          ],
        },
      ],
    },
    {
      title: "Personal project",
      key: "personal",
      projects: [
        {
          image: KwikQImage,
          status: "done",
          projectName: "KwikQ",
          color: "#295dff",
          desc: "KwikQ is a smart queue management app that lets users join queues online, track their position, and get notified when it’s nearly their turn. Businesses and banks can manage queues easily through an admin dashboard, improving efficiency and customer experience.",
          role: "Front-end lead",
          liveLink: "https://kwik-q.vercel.app/",
          languaguesUsed: ["React", "Styled components", "CSS", "Rest API"],
        },
        {
          image: WeatheraAppImage,
          status: "done",
          projectName: "weather app",
          color: "#295dff",
          desc: "This is a responsive weather application that provides real-time weather updates and forecasts for any location.",
          role: "Front-end ",
          liveLink: "https://eng-weather-app.vercel.app/",
          languaguesUsed: ["React", "Tailwind CSS", "JavaScript", "Rest API"],
        },
        {
          image: TaskForgeImage,
          status: "done",
          projectName: "Task Forge",
          color: "#f16b14",
          desc: "A modern task management application that helps users organize tasks efficiently with a clean and intuitive interface.",
          role: "Front-end ",
          liveLink: "https://eng-final-project.vercel.app/",
          languaguesUsed: [
            "React",
            "Tailwind CSS",
            "TypeScript",
            "Shadcn UI",
            "Lucide React",
            "Recharts",
            "date-fns",
            "react-hook-form",
          ],
        },
      ],
    },
  ];

  const renderProjectCard = (ele: Project, idx: number) => {
    return (
      <div
        key={`${ele.projectName}-${idx}`}
        className=" w-full ssr:w-92 h-90 min-h-fit m-2 xl:m-1 2xl:m-2 bg-white shadow-lg rounded-2xl flex justify-between flex-col overflow-clip"
      >
        {/* image container */}
        <div className="w-full h-[45%]">
          <img
            src={ele.image}
            alt="preview image"
            loading="lazy"
            className="w-full h-full"
          />
        </div>

        {/* name content .... */}
        <div className=" h-[52%] min-h-fit flex justify-center items-center">
          <div className=" w-full max-w-[96%] h-full">
            <div className=" w-full flex justify-between items-center mt-2">
              <h1
                style={{ backgroundColor: `${ele.color}` }}
                className={`w-fit px-4 py-2 font-bold text-xs ssr:text-sm md:text-lg text-white rounded-br-xl rounded-tl-xl`}
              >
                {ele.projectName}
              </h1>

              <p
                style={{ color: `${ele.color}` }}
                className="text-[.9rem] font-bold"
              >
                {ele.role}
              </p>
            </div>
            <p className="text-xs xl:text-[.85rem] my-2">{ele.desc}</p>

            <div className="flex flex-wrap">
              {ele.languaguesUsed?.map((skill, skillIdx) => {
                return (
                  <div
                    style={{ backgroundColor: "" }}
                    key={`${skill}-${skillIdx}`}
                    className="border border-blue-950 m-1 px-2 w-fit"
                  >
                    {skill}
                  </div>
                );
              })}
            </div>

            {/* live links */}
            <div className="w-full my-2">
              <button
                onClick={() => {
                  if (ele.status === "in_production") {
                    SetshowProdModal(true);
                    SetprodLink(ele.liveLink);
                    return;
                  }

                  window.open(ele.liveLink, "_blank");
                }}
                style={{ backgroundColor: `${ele.color}` }}
                className="relative text-white font-medium text-[17px] px-4 py-[0.35em] pl-5 h-[2.8em] rounded-[0.5em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group"
              >
                <span className="mr-10">view project</span>
                <div className="absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] active:scale-95">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="w-[1.1em] transition-transform duration-300 text-[#7b52b9] group-hover:translate-x-[0.1em]"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      {/* <ToastContainer /> */}

      {showProdModal && (
        <ProdModal
          link={prodLink}
          text="This project is currently under production as changes haven't been deployed yet."
          closeModal={() => SetshowProdModal(false)}
        />
      )}

      {/* Page content */}
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-[90%]">
          {/* First content */}

          {/* <Fade direction="up" duration={1500} damping={0.1} triggerOnce> */}
          <div className="w-full h-screen flex justify-between flex-col md:flex-row">
            {/* Image container */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full md:max-w-[50%] h-[50%] md:h-full flex flex-col justify-center text-center items-center"
            >
              <MindMap />
            </motion.div>

            {/* content */}

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full md:max-w-[50%] h-[50%] md:h-full flex flex-col justify-center text-center items-center"
            >
              <h1 className="text-2xl md:text-4xl 2xl:text-6xl font-bold text-[#00072d]">
                Projects
              </h1>
              <p className="my-4 text-gray-700 font-semibold text-sm md:text-lg 2xl:text-xl">
                These projects reflect my journey as a frontend developer,
                building scalable, responsive, and user-friendly interfaces with
                modern web technologies.
              </p>
            </motion.div>
          </div>
          {/* </Fade> */}
          {/*  */}

          {/* Projects card  */}
          {/* <Fade direction="up" duration={1500} damping={0.1} triggerOnce> */}
          <div className="w-full">
            {projectsByCategory.map((category) => {
              return (
                <div key={category.key} className="w-full mb-10">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl my-2 font-bold text-center text-[#00072d] mb-4">
                    {category.title}
                  </h1>
                  <div className="w-full flex gap-4 flex-wrap">
                    {category.projects.map(renderProjectCard)}
                  </div>
                </div>
              );
            })}
          </div>
          {/* </Fade> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectsPage;

// Switch button
