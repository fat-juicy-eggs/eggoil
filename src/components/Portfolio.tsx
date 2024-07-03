import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { fadeIn, textVariant } from '../utils/motion';

const Projects = () => {
    const images = [
        {
            original: '/one.png',
        },
        {
            original: '/two.png',
        },
        {
            original: '/three.png',
        },
    ];
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
        <motion.section initial="hidden" whileInView='show' viewport={{ once:true, amount:0.25 }} className='px-0 2x1:px-60 py-10 2x1:py-16 max-w-full mx-auto relative z-0'>
            <span className='hash-span' id='experience'>
                &nbsp;
            </span>
            <div className="section">
                <div className='text-center md:text-left md:px-20 lg:px-40'>
                  <motion.div variants={textVariant()}>
                    <h2 className='text-white font-bold md:text-[60px] sm:text-[37px] text-[30px]'>3D modeling! (with Blender)</h2>
                  </motion.div>
                </div>
                <motion.div ref={ref} animate={controls} initial="hidden" variants={fadeIn("up", "spring", 0, 0.75)} className='w-full mt-[-2px] flex items-center justify-center'>
                  <ImageGallery items={images} showThumbnails={false} showFullscreenButton={true} showPlayButton={true} showBullets={true} autoPlay={true} slideInterval={5000} />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Projects;
