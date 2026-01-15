import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="h-[10vh] flex justify-center items-center">
        <p className="text-[#00072d] flex items-center ">
          Made with
          <span className="mx-1">
            <FaHeart />
          </span>
          by Adebola Joseph{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
