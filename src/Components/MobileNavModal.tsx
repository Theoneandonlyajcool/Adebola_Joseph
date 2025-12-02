import React from "react";
import { FaXmark } from "react-icons/fa6";

import { IoHomeSharp } from "react-icons/io5";
import { IoSchoolSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { BiSolidBookAlt } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

type MobileNavprops = {
  closeModal: boolean;
};

const MobileNavModal = ({ closeModal }: MobileNavprops) => {
  //   console.log(`This is the close modal value ${closeModal()}`);

  const nav = useNavigate();
  return (
    <div className="bg-gray-900/30 h-[100vh] w-full top-0 left-0 fixed flex justify-end absolute">
      {/* Modal */}
      <div className="bg-white w-[100%] ssr:w-[70%] md:w-[50%] h-full">
        {/* close */}
        <div className="relative  w-full h-[8vh] flex justify-end items-center">
          <FaXmark
            onClick={() => closeModal(false)}
            className="text-3xl text-gray-700 cursor-pointer"
          />
        </div>

        {/* Content */}
        <div className=" h-[80%] mt-2">
          {[
            {
              onPage: "Home",
              icon: <IoHomeSharp />,
              NavTo: "/",
            },
            {
              onPage: "Education",
              icon: <IoSchoolSharp />,
              NavTo: "/education",
            },
            {
              onPage: "Experience",
              icon: <MdWork />,
              NavTo: "/experience",
            },
            {
              onPage: "Projects",
              icon: <BiSolidBookAlt />,
              NavTo: "/projects",
            },
            {
              onPage: "Open Source",
              icon: <FaCode />,
              NavTo: "/opensource",
            },
            {
              onPage: "Contact Me",
              icon: <FaPhone />,
              NavTo: "/contact",
            },
          ].map((ele, idx) => (
            <button
              className="border-b border-b-gray-700  w-full h-[15%] flex justify-start items-center px-4 cursor-pointer hover:bg-[#7fcbfd] transition-all ease-in-out duration-500"
              onClick={() => {
                nav(ele.NavTo);
                closeModal(false);
              }}
            >
              <p className="font-bold  text-2xl mx-2 text-blue-950">
                {" "}
                {ele.icon}
              </p>
              {ele.onPage}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavModal;
