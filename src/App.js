import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './component/Counter';
import Blur from './component/Blur';
import Loginpage from './component/Loginpage';
import LoginpageCss from './component/LoginpageCss';
import EvntHandler from './component/EvntHandler';
import EvntPooling from './component/EvntPooling';
import EvntHandling from './component/EvntHandling';
import EventhandlingBtn from './component/EventhandlingBtn';
import Onsubmit from './component/Onsubmit';
import Youtube from './component/Youtube';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Counter />} />
          <Route path='/blur' element={<Blur />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path='/loginpagecss' element={<LoginpageCss />} />
          <Route path='/eventhandler' element={<EvntHandler />} />
          <Route path='/eventpooling' element={<EvntPooling />} />
          <Route path='/eventhandling' element={<EvntHandling />} />
          <Route path='/eventhandlingbtn' element={<EventhandlingBtn />} />
          <Route path='/onsubmit' element={<Onsubmit />} />
          <Route path='/youtube' element={<Youtube />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
