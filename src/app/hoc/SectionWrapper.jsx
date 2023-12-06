import { motion } from "framer-motion";

import { staggerContainer } from "../utils/motion";


const SectionWrapper = (Component, idName) =>
  function HOC() {
    console.log("Inside SectionWrapper HOC"); // Add a console log for debugging
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;