import '../App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Projects_Mobile from './Projects-Mobile';


  function AnimatedRoutes() {
    const location = useLocation();
    const isMobile = window.matchMedia('(max-width: 1000px)').matches;

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={<Home />}/>
                {/* <Route path='/projects' element={<Projects />}/> */}
                <Route path='/resume' element={<Resume />}/>
                <Route path='*' element={<Navigate to="/" replace />}/>
                <Route path='/projects' element={isMobile ? <Projects_Mobile /> : <Projects />}/>
            </Routes>
        </AnimatePresence>
        
    )   
  }

export default AnimatedRoutes;
