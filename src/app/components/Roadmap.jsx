"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { roadmaps } from "../constants";
import { styles } from "../styles";

const Roadmap = () => {
  return (
    <section id="roadmap" className="my-10">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Roadmap</h2>
      </motion.div>

      <div className="flex flex-wrap justify-start px-12 mt-12 sm:mt-24 md:space-x-9">
      {/* <div className="flex flex-wrap justify-start mt-8 sm:mt-24 space-y-10 sm:space-y-0"> */}
        {roadmaps.map((roadmap) => (
          <div key={roadmap.title} className="w-full sm:w-60 flex-shrink-0 mb-6 sm:mb-20 ">
            <div className="flex flex-col items-center space-y-5">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex-shrink-0">
                <Image src={roadmap.icon} alt="roadmap" className="w-full h-full" />
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
            </div>
            <div className="mt-5 bg-gray-800 p-5 rounded-lg w-full">
              <h3 className="mb-4 text-lg font-semibold text-white">{roadmap.title}</h3>
              <time className="block mb-2 text-sm font-semibold text-yellow-300">
                {roadmap.time}
              </time>
              {/* Add more details if needed */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

 export default Roadmap;
