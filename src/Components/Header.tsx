import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import MobileNavModal from "./MobileNavModal";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [openMobileNav, SetOpenMobieNav] = useState(false);
  const [ActivePage, SetActivePage] = useState("home");
  const browserLocation = useLocation();
  const currentLoaction = browserLocation.pathname;

  useEffect(() => {
    SetActivePage(currentLoaction);
  }, []);

  const nav = useNavigate();
  return (
    <div className=" h-[10vh] lg:h-[15vh] flex justify-center items-center">
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
                activePage: "/home",
              },
              {
                onPage: "Education",
                NavTo: "/education",
                activePage: "/education",
              },
              {
                onPage: "Experience",
                NavTo: "/experience",
                activePage: "/experience",
              },
              {
                onPage: "Projects",
                NavTo: "/projects",
                activePage: "/projects",
              },
              {
                onPage: "Open Source",
                NavTo: "/opensource",
                activePage: "/opensource",
              },
              {
                onPage: "Contact Me",
                NavTo: "/contact",
                activePage: "/contact",
              },
            ].map((ele, idx) => {
              return (
                <li
                  key={idx}
                  className={`cursor-pointer ${
                    ele.activePage == ActivePage && "font-bold"
                  } text-lg text-[#00072d] hover:bg-[#7fcbfd] p-2 w-fit transition-all ease-in-out duration-300`}
                  onClick={() => {
                    SetActivePage(ele.activePage);
                    nav(ele.NavTo);
                    // setTimeout(() => {}, 1000);
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
