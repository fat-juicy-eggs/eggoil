import React from 'react';
import { ModelCanvas } from ".";

const Hero = ({ scrollContainer }) => {
    const characters = '!"#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz{|}~';

    const handleMouseEnter = (event) => {
        let iterations = 0

        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split("").map((letter, index) => {
                if (index < iterations) {
                    return event.target.dataset.value[index];
                }
                return characters[Math.floor(Math.random() * 87)];
            }).join("");
    
            if (iterations >= event.target.dataset.value.length) {
                clearInterval(interval);
            }
    
            iterations += 1/5;
        }, 50)
    };

    return (
        <section id="hero" className="parallax">
            <div className='flex flex-col'>
                <div className="flex-1 lg:mb-0">
                    <h2>
                        My <br /> personal <br /> portfolio.
                    </h2>
                </div>
            </div>
            <ModelCanvas scrollContainer={scrollContainer} />
        </section>
    );
};

export default Hero;
