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
        <div className='w-full mt-[-2px] flex gap-5 mx-2' style="height:1vh;">
          <motion.div ref={ref} animate={controls} initial='hidden' variants={fadeIn("up", "spring", 0, 0.75)}>
            <h4 className='text-white md:text-[30px] sm:text-[18px] text-[15px]'>This is the title of the paper</h4>
            <div className='relative w-full mx-[5px]'>
              <iframe src="https://docs.google.com/gview?url=https://assets-global.website-files.com/603d0d2db8ec32ba7d44fffe/603d0e327eb2748c8ab1053f_loremipsum.pdf&embedded=true" className="px-[10px]"></iframe>
            </div>
          </motion.div>
        </div>
    </motion.section>
  );
};

export default Experience;
