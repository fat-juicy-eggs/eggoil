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
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={fadeIn("up", "spring", 0, 0.75)}
          className='w-full mt-[-2px] flex flex-col md:flex-row-reverse gap-5'
        >
          <div className='relative w-full md:w-3/5'>
            <object className='w-full h-auto' type="application/pdf" data="https://0e894d7378904f25da001d4032d4c163.cdn.bubble.io/f1717472409050x638129927429342300/Business%20Plan.pdf">
              <p>Error: PDF could not load</p>
            </object>
          </div>
    
          <div className='w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center text-left md:text-right'>
            <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight'>{name}</h3>
            <p className='mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>{description}</p>
          </div>
        </motion.div>
    </motion.section>
  );
};

export default Experience;
