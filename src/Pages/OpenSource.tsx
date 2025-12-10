import Header from "../Components/Header";
import * as motion from "motion/react-client";

const ball = {
  width: "100%",
  height: " 100vh",
  backgroundColor: "#dd00ee",
  // borderRadius: "",
};

const OpenSource = () => {
  return (
    <div>
      <Header />
      open source
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 3.5,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        style={ball}
      />
    </div>
  );
};

export default OpenSource;
