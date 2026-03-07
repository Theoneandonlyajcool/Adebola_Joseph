import Header from "@/components/Header";
import EducationIllustration from "@/components/EducationIllustration";

const EducationPage = () => {
  return (
    <div>
      <Header />

      <div className="flex justify-center items-center">
        <div className="w-full max-w-[90%]">
          {/* Intro */}
          <div className="h-[90vh] border-2 border-red-500 flex flex-col lg:flex-row justify-between">
            <div className="border-2 border-blue-800 w-full h-full lg:max-w-[50%] flex justify-center items-center ">
              <EducationIllustration />
            </div>
            <div className="border-2 border-blue-800 w-full h-full lg:max-w-[45%] flex flex-col justify-center items-center text-[#01072c]">
              <h1 className="font-bold text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl">
                Education
              </h1>
              <h3 className="font-bold text-xl md:text-2xl 2xl:text-3xl my-4">
                Basic Qualification and certifications
              </h3>
            </div>
          </div>

          {/* Degrees recieved */}
          <div className="h-screen"></div>

          {/* Certifications received */}
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
