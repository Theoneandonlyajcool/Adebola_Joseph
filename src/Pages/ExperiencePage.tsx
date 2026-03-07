import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Timeline } from "@/components/TimeLine";
import { motion } from "motion/react";
import ExperienceIllustration from "@/components/ExperienceIllustration";

const ExperiencePage = () => {
  const [openWorks, setOpenWorks] = useState(false);
  const [openInternships, setOpenInternships] = useState(false);
  const [openVolunteership, setOpenVolunteership] = useState(false);

  const workExp: Array<{
    role: string;
    company: string;
    location: string;
    date: string;
    description: string;
  }> = [];

  const internshipExp = [
    {
      role: "Frontend Developer Intern",
      company: "Oko AI",
      location: "Remote",
      date: "January 2026 – present",
      description:
        "IMPROVED and added new FEATURES to an existing Next.js, TypeScript, and Tailwind CSS codebase, collaborating closely with backend and UI/UX teams to ship new features and deliver a smooth user experience. Improved performance through lazy loading, code splitting, and efficient data memoization to reduce unnecessary backend requests and speed up the application.",
    },
    {
      role: "Frontend Developer Intern",
      company: "Enovelab institute",
      location: "Remote",
      date: "october 2025 – December 2025",
      description:
        "Built and maintained user-facing features using React.js, Tailwind CSS, Material UI, and Axios. - Integrated REST APIs with Axios for data fetching and state updates. - Collaborated remotely with designers and backend developers todeliver responsive, production-ready interfaces.",
    },
  ];

  const volunteershipExp = [
    {
      role: "Engineering Team Lead (Volunteer)",
      company: "Center for Low-Resource Languages & Cultures (CLRLC)",
      location: "Remote",
      date: "March 2026 – Present ",
      description:
        "Led the engineering team in building community-driven technology initiatives focused on democratizing Artificial Intelligence for low-resource languages. – Coordinated development tasks, guided contributors, and ensured frontend implementations followed modern best practices.",
    },

    {
      role: "Frontend Developer (Volunteer)",
      company: "Center for Low-Resource Languages & Cultures (CLRLC)",
      location: "Remote",
      date: "January 2026 – Present ",
      description:
        "Contribute to community-driven technology initiatives focused on democratizing Artificial Intelligence for low-resource languages. – Build and maintain responsive frontend interfaces while collaborating with a global network of developers, researchers, and contributors.",
    },

    {
      role: "Frontend Developer (Volunteer)",
      company: "Devbyte Community",
      location: "Remote",
      date: "July 2025 - present",
      description:
        "Contribute to community-driven and open-source frontend projects. - Assist learners by reviewing code, sharing frontend best practices, and explaining React concepts. - Actively participate in discussions around UI/UX, accessibility, and modern frontend tooling.",
    },

    {
      role: "Frontend Developer (Volunteer)",
      company: "The Engineers Network",
      location: "Remote",
      date: "October 2025 - present",
      description:
        "Volunteered as a frontend developer contributing to community-focused web applications. - Built and refined responsive UI components using React and Tailwind CSS. - Collaborated with other engineers to improve usability, consistency, and performance across the platform.",
    },
  ];

  return (
    <div>
      <Header />

      <div className=" w-full flex justify-center items-center ">
        <div className="w-full max-w-[90%]">
          {/* First section */}

          <div className="h-[83.5vh] w-full flex flex-col lg:flex-row">
            {/* Image container */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full lg:max-w-[50%] h-full"
            >
              <ExperienceIllustration />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center w-full lg:max-w-[50%] h-full flex flex-col justify-center items-center"
            >
              <h1 className="text-[#011c54] font-bold text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl mb-6">
                Experience
              </h1>

              <h2 className="text-[#011c54] font-bold text-lg md:text-xl mb-2 2xl:text-2xl">
                Work, Internship and Volunteership
              </h2>

              <p className="w-full max-w-[90%] text-gray-600 font-semibold xl:text-[1rem] 2xl:text-[1.5rem]">
                I have worked on projects involving reusable components, API
                integration, and performance-driven interfaces using React,
                TypeScript, JavaScript, and Tailwind CSS. I enjoy turning
                complex ideas into clean, intuitive user experiences and
                continuously improving my skills through real-world projects and
                collaboration.
              </p>
            </motion.div>
          </div>

          {/* Sectond section */}

          <div className="w-full  mx-auto mt-10">
            {/* Works */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="hover:text-gray-500 my-4"
            >
              {/* Header */}
              <button
                onClick={() => setOpenWorks(!openWorks)}
                className="cursor-pointer w-full flex items-center justify-between
        border-4 border-[#011c54] rounded-lg px-4 py-3
        bg-blue-50 font-medium"
              >
                <span>Work</span>
                <span className="text-xl">{openWorks ? "−" : "+"}</span>
              </button>

              {/* Collapsible Content */}
              <div
                className={`transition-all duration-500 overflow-hidden
        ${openWorks ? "max-h-[1000px] mt-6" : "max-h-0"}`}
              >
                {workExp.length === 0 ? (
                  <p className="text-gray-600 w-full text-center font-semibold mb-4">
                    No work experience available at the moment.
                  </p>
                ) : (
                  workExp.map((item, index) => (
                    <Timeline
                      key={index}
                      title={item.role}
                      company={item.company}
                      date={item.date}
                      location={item.location}
                      description={item.description}
                    />
                  ))
                )}
              </div>
            </motion.div>

            {/* Internships */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 0.8, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="hover:text-gray-500"
            >
              {/* Header */}
              <button
                onClick={() => setOpenInternships(!openInternships)}
                className="cursor-pointer w-full flex items-center justify-between
        border-4 border-[#011c54] rounded-lg px-4 py-3
        bg-blue-50 font-medium"
              >
                <span>Internships</span>
                <span className="text-xl">{openInternships ? "−" : "+"}</span>
              </button>

              {/* Collapsible Content */}
              <div
                className={`transition-all duration-500 overflow-hidden
        ${openInternships ? "max-h-[1000px] mt-6" : "max-h-0"}`}
              >
                {internshipExp.map((item, index) => (
                  <Timeline
                    key={index}
                    title={item.role}
                    company={item.company}
                    date={item.date}
                    location={item.location}
                    description={item.description}
                  />
                ))}
                {/* <Timeline /> */}
              </div>
            </motion.div>

            {/* Volunteership */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="hover:text-gray-500 my-4"
            >
              {/* Header */}
              <button
                onClick={() => setOpenVolunteership(!openVolunteership)}
                className="cursor-pointer w-full flex items-center justify-between
        border-4 border-[#011c54] rounded-lg px-4 py-3
        bg-blue-50 font-medium"
              >
                <span>Volunteership</span>
                <span className="text-xl">{openVolunteership ? "−" : "+"}</span>
              </button>

              {/* Collapsible Content */}
              <div
                className={`transition-all duration-500 overflow-hidden
        ${openVolunteership ? "max-h-[1000px] mt-6" : "max-h-0"}`}
              >
                {volunteershipExp.map((item, index) => (
                  <Timeline
                    key={index}
                    title={item.role}
                    company={item.company}
                    date={item.date}
                    location={item.location}
                    description={item.description}
                  />
                ))}

                {/* <Timeline /> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ExperiencePage;
