import React from 'react';
import SectionWrapper from '../hoc/SectionWrapper';

const Projects = () => {
    return (
        <motion.section initial="hidden" whileInView='show' viewport={{ once:true, amount:0.25 }} className='px-0 2x1:px-60 py-10 2x1:py-16 max-w-full mx-auto relative z-0'>
            <span className='hash-span' id='experience'>
                &nbsp;
            </span>
            <div className="section">
                <div className='text-center md:text-left md:px-20 lg:px-40'>
                  <motion.div variants={textVariant()}>
                    <h2 className='text-white font-bold md:text-[60px] sm:text-[37px] text-[30px]'>3D modeling!</h2>
                  </motion.div>
                </div>
                <motion.div ref={ref} animate={controls} initial="hidden" variants={fadeIn("up", "spring", 0, 0.75)} className='w-full mt-[-2px] flex'>
                  
                </motion.div>
            </div>
        </motion.section>
    );
};

export default SectionWrapper(Projects, 'projects');
