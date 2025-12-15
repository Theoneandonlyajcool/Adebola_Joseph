import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <Fade direction="up" duration={1000} damping={0.1} triggerOnce>
      <div className="h-[10vh] flex justify-center items-center">
        <p className="text-[#00072d]">Made with ❤️ by Adebola Joseph </p>
      </div>
    </Fade>
  );
};

export default Footer;
