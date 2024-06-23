import React from 'react';
import SectionWrapper from '../hoc/SectionWrapper';

const Experience = () => {
    return (
        <div className="section">
            <h1>Experience</h1>
            <p>My Experience</p>
        </div>
    );
};

export default SectionWrapper(Experience, 'experience');