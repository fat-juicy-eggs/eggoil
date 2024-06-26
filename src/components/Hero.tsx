import React from 'react';
import { ModelCanvas } from ".";
import { useState } from 'react';

const Hero = ({ scrollContainer }) => {
    return (
        <section id="hero" className="parallax">
            <div className='absolute right-0 bottom-0 w-full mx-auto flex flex-col items-start z-10'>
                <div className='flex-1 mb-0'>
                    <h2 className='font-medium text-white text-[40px]'>
                        Scroll down.
                    </h2>
                </div>
            </div>
            <ModelCanvas scrollContainer={scrollContainer} />
        </section>
        <br/><br/><br/><br/>
    );
};

export default Hero;
