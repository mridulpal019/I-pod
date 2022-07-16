import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import ZingTouch from 'zingtouch';
import List from "../config/List";


const Controller=()=>{
     const navigate=useNavigate();
    //  const menu=(e)=>{
    //   e.preventDefault();
    //   navigate('/')
    console.log(window.location.pathname,"path name")
    const List=[
      [
       "cover-flow",
      "music",
       "games",
       "settings"
     ],
      [
       "all-songs",
       "artist",
      "albums"
      ],   
    ]
    console.log(List[0]);

    //  }
    const home=(e)=>{
      e.preventDefault();
      navigate('/')

    }
    var touchArea;
  
    var angle;
    // console.log(angle)
    var direction;
    const tt=()=>{
    touchArea = document.getElementById('controller');
    const myRegion = new ZingTouch.Region(touchArea);
    console.log('called')
    var f=15;
    let direction;

    myRegion.bind(touchArea, 'rotate', function(e){
         angle=e.detail.angle;
         console.log(direction)
         
         if( Math.abs(e.detail.distanceFromOrigin) > f){
          console.log("bingo",f);
          f+=15;
          if (e.detail.distanceFromLast>0){
            if (!direction){
              direction='clockwise';
            }else if(direction == 'anticlockwise'){
                  direction ='clockwise'
                  f=15;                 
            }        
          
            console.log('Yes')
           }else{
            if (!direction){
              direction='anticlockwise';
            }else if(direction == 'clockwise'){
                  direction ='anticlockwise'
                  f=15;   
              console.log("no")              
            }   

           }
          
         }
         console.log(e.detail)
        
   });
  }
    
    return (
        <div className='pod-controller' id='controller' onMouseEnter={tt}>
        <div id='Menu' onClick={home}><h3>Menu</h3></div>
        <div className='controller-mid' > <i className="fa-solid fa-backward-fast"></i> <div id='enter' className='enter'></div>  <i className="fas fa-forward-fast"></i></div>
        <div className='play-pause'><i className="fas fa-play"></i> <i className="fas fa-regular fa-pause"></i></div>
      
      </div>
    ) ;
    }



export default Controller;