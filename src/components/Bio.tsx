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
                <div className='w-full h-fit z-40'>
                  <div className='flex flex-col w-1/2 text-center justify-center'>
                    <h2 className='text-white font-bold text-[40px]'>
                      Daniel Yi
                    </h2>
                    <img src={daniel} className='w-2/3 inset-y-0 right-0' alt='me'/>
                  </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Bio;
