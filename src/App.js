import {Routes, Route} from 'react-router-dom'
import Landingpage from './components/Landingpage';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div>
             <Routes>
              <Route path='/'  element = {<Landingpage />} />
              <Route path='/services' element= {<Services/>}/>
              <Route path='/contact' element= {<Contact/>}/>
             </Routes>
    </div>
  );
}

export default App;
