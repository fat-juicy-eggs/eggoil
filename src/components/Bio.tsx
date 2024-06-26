import React from 'react';
import { SectionWrapper } from '../hoc';

const Bio = () => {
    return (
        <div className="section">
            <div className='w-full h-fit opacity-10 z-40'>
              <div className='flex flex-col w-1/2 text-center'>
                <h2 className='text-white font-bold text-[40px]'>
                  Daniel Yi
                </h2>
              </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Bio, 'bio');
