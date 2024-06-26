import React from 'react';
import { ModelCanvas } from ".";
import { useState } from 'react';

const Hero = ({ scrollContainer }) => {
    return (
        <section id="hero" className="parallax">
            <div className='absolute top-[10%] sm:top-[16%] lg:top-[24%] w-full mx-auto lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row items-start z-10'>
                <div className="flex-1 lg:mb-0">
                  <h4 className='absolute font-medium text-white text-[15px] xs:text-[18px] sm:text-[25px] md:text-[30px] lg:text-[37px] 2xl:text-[67px] leading-[41px] 2xl:leading-[60px] text-align:left bottom-0 right-0'>
                    Scroll down.
                  </h4>
                </div>
            </div>
            <ModelCanvas scrollContainer={scrollContainer} />
        </section>
    );
};

export default Hero;
