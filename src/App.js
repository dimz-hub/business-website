import {Routes, Route} from 'react-router-dom'
import Landingpage from './components/Landingpage';
import Services from './components/Services';

function App() {
  return (
    <div>
             <Routes>
              <Route path='/'  element = {<Landingpage />} />
              <Route path='/services' element= {<Services/>}/>
             </Routes>
    </div>
  );
}

export default App;
