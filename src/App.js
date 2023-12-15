import './App.css';
import './mobile.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';

  // function App() {
  //   const location = useLocation();

  //   return (
  //     <Router>
  //       <Routes>
  //         <Route exact path='/' element={<Home />}/>
  //         <Route path='/projects' element={<Projects />}/>
  //         <Route path='/resume' element={<Resume />}/>
  //         <Route path='*' element={<Navigate to="/" replace />}/>
  //       </Routes>
  //     </Router>
  //   )   
  // }

  function App() {
    
    return (
      <Router>
        <AnimatedRoutes />
      </Router>
    )
  }

export default App;
