import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { fadeIn, textVariant } from '../utils/motion';

const Otherprojects = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
      threshold: 0,
    });
    const iframeRef = useRef(null);
    useEffect(() => {
        const iframe = iframeRef.current;
        if (iframe && iframe.contentWindow) {
            iframe.onload = () => {
                const doc = iframe.contentDocument || iframe.contentWindow.document;
                const scale = 0.1; // Adjust scale as needed
                doc.body.style.transform = `scale(${scale})`;
                doc.body.style.transformOrigin = 'top left';
                doc.body.style.width = `${100 / scale}%`;
                doc.body.style.height = `${100 / scale}%`;
                doc.body.style.overflow = 'hidden';
            };
        }
    }, ["https://chill-ai.vercel.app/"]);
    useEffect(() => {
      if (inView) {
        controls.start("show");
      }
    }, [controls, inView]);
    const handleClick = (event) => {
        window.open("https://chill-ai.vercel.app/", "_blank").focus();
    }
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
              <div style={{height: "20vh"}}></div>
              <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight'>CHILL AI: Modeling Heat Islands</h3>
              <div style={{height: "10vh"}}></div>
              <motion.div ref={ref} animate={controls} initial="hidden" variants={fadeIn("up", "spring", 0, 0.75)} className='w-full mt-[-2px] flex items-center justify-center cursor-pointer'  onClick={handleClick}>
                <div className='flex'>
                  <div className='relative w-full h-auto bg-secondary rounded-md'>
                      <iframe 
                          src="https://chill-ai.vercel.app/"
                          ref={iframeRef}
                          title="Site Preview"
                          scrolling="no"
                          onClick={handleClick}
                          style={{width: "500px", height: "250px"}}
                      />
                  </div>
                </div>
                <div className='w-full md:w-2/5 px-0 md:p-8 flex flex-col justify-center text-left md:text-left'>
                  <p className='mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl z-10'>
                    We created a computer vision model that classifies areas of urban heat islands and presented as a business pitch in the Moonshot Pirates Shape the Future challenge, earning 2nd place. {"   "}<span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-10 before:h-3 before:w-full before:bg-cyan-600">Click here to visit the website.</span>
                  </p>
                </div>
            </motion.div>
          </div>
      </section>
    );
};

export default Otherprojects;
