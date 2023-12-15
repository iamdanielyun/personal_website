import '../App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';


  function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={<Home />}/>
                <Route path='/projects' element={<Projects />}/>
                <Route path='/resume' element={<Resume />}/>
                <Route path='*' element={<Navigate to="/" replace />}/>
            </Routes>
        </AnimatePresence>
        
    )   
  }

export default AnimatedRoutes;
