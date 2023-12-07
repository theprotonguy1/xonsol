"use client"
import { Tilt } from 'react-tilt';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { styles } from "../styles";
import { tokenomics } from '../constants';
import { fadeIn } from "../utils/motion";
import SectionWrapper from '../hoc/SectionWrapper';


const ServiceCard = ({ index, title, icon, desc }) => {
  return (
    <Tilt className="w-[235px]">
      <motion.div 
        variants={fadeIn("right","spring",0.5 * index, 0.75)}
        className='w-full neon-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary rounded-[20px] py-5 min-h-[250px] flex justify-evenly items-center flex-col'
        >
          <Image src={icon} alt={title} width={120} height={120} className='' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          <div className='text-white font-mono text-base font-bold'>
            {desc}
          </div>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Tokenomics = (index) => {
  return (
    <div id='tokenomics' className='px-12 md:mt-20 my-10'>
      <motion.div  variants={fadeIn("left","spring",0.5 * index, 0.75)}>
        <h2 className={styles.sectionHeadText}>Tokenomics</h2>
        <p className={styles.sectionSubText}>
          Understand the financial structure and utility dynamics of our token
          in the Tokenomics section.
        </p>
      </motion.div>

      <div className="my-14 flex flex-wrap gap-10 justify-center">
        {tokenomics.map((tokenomic, index) => (
            <ServiceCard key={tokenomic.title} index={index} {...tokenomic} />
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Tokenomics, "tokenomics")