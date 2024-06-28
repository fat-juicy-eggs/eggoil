import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from 'react-intersection-observer';

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
        <div
          className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden"
        >
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: {
                opacity: 0,
                y: 100,
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "tween",
                  duration: 1,
                  delay: 0.2,
                },
              },
            }}
            className='flex-[0.8] md:pb-40 mx-4 sm:mx-auto'
          >
            <h3>Contact</h3>
          </motion.div>
        </div>
    </motion.section>
  );
};

export default Experience;
