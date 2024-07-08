import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Experience, Hero, Navbar, Projects, Bio, Otherprojects } from "./components";

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <Router>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='wrapper' ref={wrapperRef}>
          <Switch>
            <Route path="/" exact>
              <div id="hero" className='z-10'>
                <Hero scrollContainer={wrapperRef} />
              </div>
              <div id="bio" className='z-10'>
                <Bio />
              </div>
              <div id='experience' className='z-10'>
                <Experience />
              </div>
              <div id='models' className='z-10'>
                <Projects />
              </div>
              <div id='projects' className='z-10'>
                <Otherprojects />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
