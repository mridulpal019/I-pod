import './App.css';

import Home from './pages/Home';
import Controller from './pages/Controller';
import Paths from './config/Paths';
import { BrowserRouter, Router } from 'react-router-dom';


function App() {

  // var touchArea = document.getElementById('controller');
  // const myRegion = new ZingTouch.Region(touchArea);

  // myRegion.bind(touchArea, 'rotate', function(e){
	//    console.log(e.detail);
  //  });

  return (
    <div className="App">
       <div className='pod-box'>
       <BrowserRouter>
       <div className='pod-display'> 
       <Paths/>
       </div>
       <Controller/>
      </BrowserRouter>
          {/* <Home/> */}
        
       </div>
    </div>
  );
}

export default App;
