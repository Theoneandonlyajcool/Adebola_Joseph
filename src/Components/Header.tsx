import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import MobileNavModal from "./MobileNavModal";

const Header = () => {
  const [openMobileNav, SetOpenMobieNav] = useState(false);

  const nav = useNavigate();
  return (
    <div className=" h-[15vh] flex justify-center items-center">
      <div className=" w-full max-w-[90%] h-full flex justify-between items-center ss:flex-col ssr:flex-row">
        {/* Logo */}
        <div className="ss:w-full min-w-fit">
          <p
            className="font-Dancing text-[#00072d] ss:text-xl text-[1.7rem] sm:text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl cursor-pointer"
            onClick={() => nav("/")}
          >
            {"< Adebola Joseph/>"}
          </p>
        </div>

        {/* Nav links */}
        <nav className=" w-full min-w-fit   md:max-w-[60%] hidden navB:block">
          <ul className="flex w-full justify-between items-center gap-2 lg:gap-2">
            {[
              {
                onPage: "Home",
                NavTo: "/",
              },
              {
                onPage: "Education",
                NavTo: "/education",
              },
              {
                onPage: "Experience",
                NavTo: "/experience",
              },
              {
                onPage: "Projects",
                NavTo: "/projects",
              },
              {
                onPage: "Open Source",
                NavTo: "/opensource",
              },
              {
                onPage: "Contact Me",
                NavTo: "/contact",
              },
            ].map((ele, idx) => {
              return (
                <li
                  className="cursor-pointer text-lg text-[#00072d]  p-2  hover:border-b-2 hover:border-gray-700 w-fit transition-all  duration-300"
                  onClick={() => {
                    nav(ele.NavTo);
                  }}
                >
                  {ele.onPage}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile navigation */}

        <nav className="navB:hidden ss:w-full ss:flex ss:justify-end">
          <FiMenu
            className="text-3xl cursor-pointer"
            onClick={() => SetOpenMobieNav(true)}
          />

          {openMobileNav && <MobileNavModal closeModal={SetOpenMobieNav} />}
        </nav>
      </div>
    </div>
  );
};

export default Header;
