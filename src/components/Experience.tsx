import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { fadeIn, textVariant } from '../utils/motion';
import ImageGallery from "react-image-gallery";

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
  const images = [
    {
      original: "https://images.unsplash.com/photo-1718358810029-5394de14abe7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      original: "https://images.unsplash.com/photo-1719742379974-dcf3a4c478b8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
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
            <p className='mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>2024: Identifying multi-objective optimization in an active learning loop for automated machine learning. Using Python with torch, tensorflow, jax, scipy, and scikit.</p>
          </div>
        </motion.div>
        <div className='text-center md:text-left md:px-20 lg:px-40'>
          <motion.div variants={textVariant()}>
            <h2 className='text-white font-bold md:text-[60px] sm:text-[37px] text-[30px]'>Research</h2>
          </motion.div>
        </div>
        <motion.div ref={ref} animate={controls} initial="hidden" variants={fadeIn("up", "spring", 0, 0.75)} className='w-full mt-[-2px] flex'>
          <ImageGallery items={images} />
        </motion.div>
    </motion.section>
  );
};

export default Experience;
