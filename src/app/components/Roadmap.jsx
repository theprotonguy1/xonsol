"use client"
import Image from "next/image";
import { motion, spring } from "framer-motion";
import { slideIn, zoomIn } from "../utils/motion";
import { roadmaps } from "../constants";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";

const Roadmap = () => {
  return (
    <section id="roadmap" className="my-10">
      <motion.div variants={zoomIn()}>
        <h2 className={styles.sectionHeadText}>Roadmap</h2>
      </motion.div>

      <div className="flex flex-wrap justify-start px-12 mt-12 sm:mt-24 md:space-x-9">
        {/* <div className="flex flex-wrap justify-start mt-8 sm:mt-24 space-y-10 sm:space-y-0"> */}
        {roadmaps.map((roadmap) => (
          <motion.div variants={slideIn("left","spring")}
            key={roadmap.title}
            className="w-full sm:w-60 flex-shrink-0 mb-6 sm:mb-20"
          >
            <div className="flex flex-col items-center space-y-5">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex-shrink-0">
                <Image
                  src={roadmap.icon}
                  alt="roadmap"
                  className="w-full h-full"
                />
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
            </div>
            <div className="md:h-36 md:mt-0 mt-2 bg-gray-800 p-5 rounded-lg w-full">
              <h3 className="mb-4 text-lg font-semibold text-white h-12 flex items-center">
                {roadmap.title}
              </h3>
              <time className="block mb-2 text-sm font-semibold text-yellow-300">
                {roadmap.time}
              </time>
              {/* Add more details if needed */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

 export default SectionWrapper(Roadmap,"roadmap");
