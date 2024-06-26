import React from 'react';

const Bio = () => {
    return (
        <section className='px-0 2x1:px-60 py-10 2x1:py-16 max-w-full mx-auto relative z-0'>
            <span className='hash-span' id='bio'>
                &nbsp;
            </span>
            <div className="section">
                <div className='w-full h-fit opacity-10 z-40'>
                  <div className='flex flex-col w-1/2 text-center'>
                    <h2 className='text-white font-bold text-[40px]'>
                      Daniel Yi
                    </h2>
                  </div>
                </div>
            </div>
        </section>
    );
};

export default Bio;
