
import './App.css';

function App() {
  return (
    <div className="App">
       <div className='pod-box'>
        <div className='pod-display'></div>
        <div className='pod-controller'>
          <div id='Menu'>Menu</div>
          <div className='controller-mid' > <i class="fa-solid fa-backward-fast"></i> <div id='enter' className='enter'></div>  <i className="fas fa-forward-fast"></i></div>
          <div className='play-pause'><i class="fas fa-play"></i> <i class="fas fa-regular fa-pause"></i></div>
        </div>
       </div>
    </div>
  );
}

export default App;
