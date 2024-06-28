import { useEffect, useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Experience, Hero, Navbar, Portfolio, Bio } from "./components";

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='wrapper' ref={wrapperRef}>
          <div id="hero" className='z-10'>
            <Hero scrollContainer={wrapperRef} />
          </div>
          <div id="bio" className='z-10'>
            <Bio />
          </div>
          <div id='experience' className='z-10'>
            <Experience />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
