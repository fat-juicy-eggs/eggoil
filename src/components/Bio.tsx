import daniel from '../assets/danielyi.jpg';
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const Bio = () => {
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
        <motion.section
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
            className='px-0 2xl:px-60 py-10 2xl:py-16 max-w-full mx-auto relative z-0'
          >
            <span className='hash-span' id='bio'>
              &nbsp;
            </span>
            <div className='text-center md:text-left md:px-10 lg:px-20'>
                <div className='mt-10 md:mt-20 flex flex-col gap-10 md:gap-20'>
                    <motion.div
                      ref={ref}
                      animate={controls}
                      initial="hidden"
                      variants={fadeIn("up", "spring", 0, 0.75)}
                      className={`w-full mt-[-2px] flex flex-col md:flex-row gap-5`}
                    >
                      <div className='relative w-full md:w-3/5'>
                        <img
                          src={daniel}
                          alt='me'
                          className='w-full h-auto object-cover md:rounded-3xl'
                        />
                      </div>
                
                      <div className='w-full md:w-2/5 px-0 md:p-8 flex flex-col justify-center text-left md:text-left'>
                        <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight'>Daniel Yi</h3>
                        <p className='mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>
                            Hi! I'm a high school student at Richard Montgomery High School who is interested in (almost) everything. Scroll down to see some of what I've done and maybe contact me (or not).
                        </p>
                      </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Bio;
