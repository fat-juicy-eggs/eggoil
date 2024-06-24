import React, { useRef, useEffect } from 'react';

const AnimatedText = ({ text }) => {
    const characters = '!"#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz{|}~';
    const pRef = useRef(null);

    useEffect(() => {
        const handleMouseEnter = (event) => {
            let iterations = 0;
            const interval = setInterval(() => {
                event.target.innerText = event.target.innerText.split("").map((letter, index) => {
                    if (index < iterations) {
                        return event.target.dataset.value[index];
                    }
                    return characters[Math.floor(Math.random() * characters.length)];
                }).join("");

                if (iterations >= event.target.dataset.value.length) {
                    clearInterval(interval);
                }

                iterations += 1 / 5;
            }, 50);
        };

        const pElement = pRef.current;
        if (pElement) {
            pElement.addEventListener('mouseenter', handleMouseEnter);
        }

        return () => {
            if (pElement) {
                pElement.removeEventListener('mouseenter', handleMouseEnter);
            }
        };
    }, [characters]);

    return (
        <p ref={h1Ref} data-value={text} className='text-white text-[26px] lg:text-[36px] font-bold pointer-events-auto cursor-pointer flex'>
            {text}
        </p>
    );
};

export default AnimatedText;
