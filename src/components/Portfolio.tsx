import React from 'react';
import SectionWrapper from '../hoc/SectionWrapper';

const Projects = () => {
    return (
        <div className="section">
            <h1>Projects</h1>
            <p>My Projects</p>
        </div>
    );
};

export default SectionWrapper(Projects, 'projects');