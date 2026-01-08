import Header from "@/components/Header";
import { Fade } from "react-awesome-reveal";

const EducationPage = () => {
  return (
    <div>
      <Header />
      <Fade direction="down" duration={1000} damping={0.1} triggerOnce>
        <p>I will gently appear as I enter the viewport</p>
      </Fade>
    </div>
  );
};

export default EducationPage;
