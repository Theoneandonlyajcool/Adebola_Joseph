import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Typewriter from "../Components/TypeWriter";

const IntroPage = () => {
  const nav = useNavigate();
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textArrayIndex, setTextArrayIndex] = useState(0);

  // Array of texts to cycle through
  const textsToType = [
    // "Welcome to our website!",
    // "We create amazing experiences.",
    // "Built with React and Tailwind CSS.",
    // "Enjoy the typewriter effect!",
    "I am Adebola Joseph",
    // "I am a Frontend developer",
  ];

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  useEffect(() => {
    const currentText = textsToType[textArrayIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentIndex < currentText.length) {
            setDisplayText(currentText.substring(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          } else {
            // Finished typing, pause then start deleting
            setTimeout(() => {
              // setIsDeleting(true);
              nav("home");
            }, pauseTime);
          }
        } else {
          // Deleting
          if (currentIndex > 0) {
            setDisplayText(currentText.substring(0, currentIndex - 1));
            setCurrentIndex(currentIndex - 1);
          } else {
            // Finished deleting, move to next text
            setIsDeleting(false);
            setTextArrayIndex((textArrayIndex + 1) % textsToType.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, textArrayIndex]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     nav("/home");
  //   }, 4000);
  // });

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0, borderRadius: "100%" }}
        animate={{ opacity: 1, scale: 1, borderRadius: "0" }}
        transition={{
          duration: 0.5,
          //   scale: { type: "spring", visualDuration: 0.4 },
        }}
        className="w-full h-screen bg-[#00072e]"
      >
        <div className=" flex flex-col justify-center items-center h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0, borderRadius: "100%" }}
            animate={{ opacity: 1, scale: 1, borderRadius: "0" }}
            transition={{
              duration: 1.5,
              //   scale: { type: "spring", visualDuration: 0.4 },
            }}
            className="my-4"
          >
            <img
              src="
            https://res.cloudinary.com/dp75oveuw/image/upload/v1765404162/New_AJ_favicon-removebg-preview_riy189.png"
              alt=""
              className="w-24 h-24 animate-pulse"
            />
          </motion.div>

          <p className=" text-4xl md:text-3xl xl:text-5xl  text-g font-Dancing text-cyan-100">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default IntroPage;
