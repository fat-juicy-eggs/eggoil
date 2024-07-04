import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { fadeIn, textVariant } from '../utils/motion';
import Preview from "./Preview";

const Otherprojects = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
      threshold: 0,
    });
    useEffect(() => {
      if (inView) {
        controls.start("show");
      }
    }, [controls, inView]);
    return (
      <section className='px-0 2xl:px-60 py-10 2xl:py-16 max-w-full mx-auto relative z-0'>
          <span className='hash-span' id='otherprojects'>
              &nbsp;
          </span>
          <div className="section justify-items-end">
              <div className='text-center md:text-left md:px-20 lg:px-40'>
                <motion.div variants={textVariant()}>
                  <h2 className='text-white font-bold md:text-[60px] sm:text-[37px] text-[30px]'>Some of my other projects</h2>
                </motion.div>
              </div>
              <motion.div ref={ref} animate={controls} initial="hidden" variants={fadeIn("up", "spring", 0, 0.75)} className='w-full mt-[-2px] flex items-center justify-center'>
                <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight'>CHILL AI: Modeling Heat Islands</h3>
                <div className='mt-10 md:mt-20 flex'>
                  <div className='auto w-3/5'>
                    <Preview url={'https://chill-ai.vercel.app/'} />
                  </div>
                </div>
                  <div className='w-full md:w-2/5 px-0 md:p-8 flex flex-col justify-center text-left md:text-left'>
                    <p className='mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>
                      We created a computer vision model that classifies areas of urban heat islands and presented as a business pitch in the Moonshot Pirates Shape the Future challenge, earning 2nd place.
                    </p>
                  </div>
                </motion.div>
              </div>
          </section>
    );
};

export default Otherprojects;
