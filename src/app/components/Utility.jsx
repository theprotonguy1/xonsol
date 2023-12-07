"use client"

import { motion } from 'framer-motion';
import SectionWrapper from '../hoc/SectionWrapper';
import { fadeIn, slideIn } from '../utils/motion';
import { styles } from '../styles';

// const UtilityBox = ({ bgColor, text, index }) => (
//   <motion.div
//     variants={slideIn(index % 2 === 0 ? 'left' : 'right', 'spring')}
//     className={`bg-${bgColor} md:px-12 md:py-10 px-6 py-4 md:text-lg font-bold text-black-100 h-full flex flex-col justify-center items-center rounded-lg`}
//   >
//     {text}
//   </motion.div>
// );

const Utility = () => {
  return (
    <section id="utility" className="mt-5 mb-[70px]">
      <motion.div
        variants={fadeIn('up', 'spring', 0.5, 0.75)}
        className="my-8"
      >
        <h2 className={styles.sectionHeadText}>Utilities</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        <motion.div variants={slideIn('left', 'spring')} className="bg-yellow-200 flex-grow md:px-12 md:py-10 px-6 py-4 md:text-lg font-bold text-black-100 h-full flex flex-col justify-center items-center rounded-lg">
        Discord Bot  {/* <h1 className='text-white border-2 border-red-500'>Discord Bot</h1> */}
        </motion.div>
        <motion.div variants={slideIn('right', 'spring')} className="bg-slate-400 flex-grow md:px-12 md:py-10 px-6 py-4 md:text-lg font-bold text-black-100 h-full flex flex-col justify-center items-center rounded-lg">
        Discord Bot{/* <h1 className='text-white border-2 border-red-500'>Discord Bot</h1> */}
          {/* <UtilityBox bgColor="slate-400" text="Telegram Bot" index={1} /> */}
        </motion.div>
        <motion.div variants={slideIn('left', 'spring')} className="bg-blue-200 flex-grow md:px-12 md:py-10 px-6 py-4 md:text-lg font-bold text-black-100 h-full flex flex-col justify-center items-center rounded-lg">
        Discord Bot
          {/* <UtilityBox bgColor="blue-200" text="OnlyHub Platform" index={2} /> */}
        </motion.div>
        <motion.div variants={slideIn('right', 'spring')} className="bg-green-200 flex-grow md:px-12 md:py-10 px-6 py-4 md:text-lg font-bold text-black-100 h-full flex flex-col justify-center items-center rounded-lg">
        Discord Bot{/* <h1 className='text-white border-2 border-red-500'>Discord Bot</h1> */}
          {/* <UtilityBox bgColor="green-200" text="Coming Soon" index={3} /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Utility, 'utility');