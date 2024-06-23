import React from 'react';
import SectionWrapper from '../hoc/SectionWrapper';

const Contact = () => {
    return (
        <div className="section">
            <h1>Contact</h1>
            <p>Reach Out</p>
        </div>
    );
};

export default SectionWrapper(Contact, 'contact');