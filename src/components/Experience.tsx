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
            <h2 className='text-white font-bold md:text-[60px] sm:text-[37px] text-[30px]'>Research</h2>
          </motion.div>
        </div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={fadeIn("up", "spring", 0, 0.75)}
          className='w-full mt-[-2px] flex flex-col md:flex-row-reverse'
        >
          <div className='relative w-2/3 md:w-3/5'>
            <object className='w-full h-full px-20' type="application/pdf" data="https://assets-global.website-files.com/603d0d2db8ec32ba7d44fffe/603d0e327eb2748c8ab1053f_loremipsum.pdf">
              <p>Error: PDF could not load</p>
            </object>
          </div>
          <div className='w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center text-left md:text-right'>
            <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight'>NIST SHIP</h3>
            <p className='mt-4 text-secondary text-md sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-xl'>2024: Identifying multi-objective optimization in an active learning loop for automated materials discovery. Using Python with torch, tensorflow, jax, scipy, and scikit, and the dataset from <a href="https://www.sciencedirect.com/science/article/pii/S096697950500186X">this paper</a>. Research was conducted with a NIST researcher and is expected to be used in a future autonomous lab project. </p>
          </div>
        </motion.div>
        <span className='hash-span' id='experience'>
            &nbsp;
        </span>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={fadeIn("up", "spring", 0, 0.75)}
          className='w-full mt-[-2px] flex flex-col md:flex-row'
        >
          <div className='relative w-2/3 md:w-3/5'>
            <object className='w-full h-full px-20' type="application/pdf" data="https://assets-global.website-files.com/603d0d2db8ec32ba7d44fffe/603d0e327eb2748c8ab1053f_loremipsum.pdf">
              <p>Error: PDF could not load</p>
            </object>
          </div>
          <div className='w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center text-right md:text-left'>
            <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight'>IB EE</h3>
            <p className='mt-4 text-secondary text-md sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-xl'>2024: Research on how piezo-generated electricity output can be maximized through the use of computer vision heatmaps and a calculation of average electric output in my high school. Covers the IB EE categories of Computer Science and Physics, making it a World Studies essay. </p>
          </div>
        </motion.div>
    </motion.section>
  );
};

export default Experience;
