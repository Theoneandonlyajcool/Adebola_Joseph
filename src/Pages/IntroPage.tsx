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
    "Adebola Joseph",
  ];

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

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
            setTimeout(() => setIsDeleting(true), pauseTime);
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

  useEffect(() => {
    setTimeout(() => {
      nav("/home");
    }, 3000);
  });

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
        <div className="min-h-screen  flex items-center justify-center p-4">
          <div className="max-w-4xl w-full">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
              <h1 className="text-2xl md:text-5xl font-bold text-white mb-8 text-center">
                Typewriter Effect
              </h1>

              <div className="bg-gray-900 rounded-lg p-6 min-h-[120px] flex items-center justify-center">
                <p className="text-2xl md:text-3xl xl:text-5xl  text-green-400 font-Dancing">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>

              <div className="mt-6 text-center text-white/80 text-sm">
                <p>The text automatically cycles through multiple phrases</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IntroPage;
