import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { fadeIn, textVariant } from '../utils/motion';

const Experience = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
      threshold: 0.1,
  });
  useEffect(() => {
      if (inView) {
          controls.start("show");
      }
  }, [controls, inView]);
  return (
    <motion.section initial="hidden" whileInView='show' viewport={{ once:true, amount:0.25 }} className='px-0 2x1:px-60 py-10 2x1:py-16 max-w-full mx-auto relative z-0'>
        <span className='hash-span' id='experience'>
            &nbsp;
        </span>
        <div className='text-center md:text-left md:px-20 lg:px-40'>
          <motion.div variants={textVariant()}>
            <h2 className='text-white font-bold md:text-[60px] sm:text-[37px] text-[30px]'>Research: NIST SHIP</h2>
          </motion.div>
        </div>
        <div className='w-full mt-[-2px] flex gap-5 mx-[5px] md:mx-[5px] sm:mx-auto'>
          <motion.div ref={ref} animate={controls} initial='hidden' variants={fadeIn("up", "spring", 0, 0.75)}>
            <h4 className='text-white md:text-[30px] sm:text-[18px] text-[15px]'>This is the title of the paper</h4>
            <div className='relative w-full md:w-3/5'>
              <embed src="https://www.buds.com.ua/images/Lorem_ipsum.pdf" />
            </div>
          </motion.div>
        </div>
    </motion.section>
  );
};

export default Experience;
