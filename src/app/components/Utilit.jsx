"use client"

import { motion } from 'framer-motion';
import SectionWrapper from '../hoc/SectionWrapper';
import { fadeIn, slideIn } from '../utils/motion';
import { styles } from '../styles';

const UtilityBox = ({ bgColor, text }) => (
  <div
    className={`bg-${bgColor} md:px-12 md:py-10 px-6 py-4 md:text-lg font-bold text-black-100 h-full flex flex-col justify-center items-center rounded-lg`}
  >
    {text}
  </div>
);

const Utilit = (index) => {
  const boxes = [
    { text: 'Discord Subscription Bot', bgColor: 'yellow-200' },
    { text: 'Telegram Bot', bgColor: 'slate-400' },
    { text: 'OnlyHub Platform', bgColor: 'blue-200' },
    { text: 'Coming Soon', bgColor: 'green-200' },
  ];

  return (
    <section id="utilit" className="mt-5 mb-[70px]">
      <motion.div
        variants={fadeIn('up', 'spring', 0.5 * index, 0.75)}
        className="my-8"
      >
        <h2 className={styles.sectionHeadText}>Utilities</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {boxes.map((box, index) => (
          <motion.div
            key={index}
            variants={slideIn(index % 2 === 0 ? 'left' : 'right', 'spring')}
            className="flex-grow"
          >
            <UtilityBox bgColor={box.bgColor} text={box.text} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Utilit, 'utilit');
