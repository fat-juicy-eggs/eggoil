import React from 'react';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import daniel from '../assets/danielyi.jpg';

const Bio = () => {
    const variants = (staggerChildren, delayChildren) => {
        return {
            hidden: {},
            show: {
                transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren || 0,
            }}
        }
    }
    return (
        <motion.section variants={variants()} initial="hidden" whileInView='show' viewport={{ once:true, amount:0.25 }} className='px-0 2x1:px-60 py-10 2x1:py-16 max-w-full mx-auto relative z-0'>
            <span className='hash-span' id='bio'>
                &nbsp;
            </span>
            <div className="section">
                <div className='w-full mt-[-2px] flex flex-col md:flex-row gap-5'>
                  <div className='relative w-full md:w-3/5'>
                    <h2 className='text-white font-bold text-[40px]'>
                      Daniel Yi
                    </h2>
                    <img src={daniel} className='w-full h-auto object-cover md:rounded-3xl' alt='me'/>
                  </div>
                </div>
                <div className='w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center text-left md:text-right'>
                    <p className='mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>
                        Hey! I'm a guy in high school with passions all over the place. Scroll down to learn more about what I've done and maybe reach out to me (not recommended /j)
                    </p>
                </div>
            </div>
        </motion.section>
    );
};

export default Bio;
