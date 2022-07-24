import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import ZingTouch from 'zingtouch';
import Song from "../assets/songs/life.mp3"



const Controller=()=>{
     const navigate=useNavigate();
    //page will get the current page so that we can set activelist to chnage the options in home/music
    const page=window.location.pathname;
    var  f=15;
    var direction;
    var navigateTo;
    const List=[
      [
       "coverflow",
      "music",
       "games",
       "settings"
     ],
      [
       "allsongs",
       "artist",
      "albums"
      ],   
    ]

    // checking and setting the activelist
    if (page=="/"){
      var  activeList=List[0]
    }else if(page=="/music"){
      var activeList=List[1];

    }
//  on click of menu the display will be redirected to Home page
    const home=(e)=>{
      e.preventDefault();
      navigate('/')

    }
    // defineng variable for zingtouch
    var touchArea;
    var angle;
    // audio for palying in allsongs in music
    var audio = new Audio(Song);
    var playing;
    const play=()=>{
      if(playing === true){
        audio.pause();
        playing=false;
      }else{
      audio.play();
      playing=true;
    } 
    }
// on click of enter button it will first check if page is all songs if it is then audio will be played/pause
// else it will navigate to the highlighted section
    const loadto=(e)=>{
      e.preventDefault();
        if(page =="/allsongs"){
          play();
        }else{
     console.log(navigateTo)
      navigate(navigateTo);
    }
    }
    
    const tt=()=>{
    touchArea = document.getElementById('controller');
    const myRegion = new ZingTouch.Region(touchArea);
    console.log('called')
    f=15;
    var i=0;
    
    const activeLenght=activeList.length;
    console.log(activeLenght,"active length");
    

    myRegion.bind(touchArea, 'rotate', function(e){
         angle=e.detail.angle;
         console.log(direction)
         
         if( Math.abs(e.detail.distanceFromOrigin) > f){
          console.log("bingo",f);
          f+=15;
          const active=document.getElementById(activeList[i]);
          navigateTo="/" +activeList[i];
          if (i== 0){
            var j=activeLenght-1;
            console.log(j,"inside if")
          }else{
          var j=Math.abs((i-1))%(activeLenght);
          }
          const inactive=document.getElementById(activeList[j]);
          inactive.className="";
          // console.log(active,"after")
          active.className = "active";
          i=(i+1)%activeLenght;
          console.log(active);
          if (e.detail.distanceFromLast>0){
            if (!direction){
              direction='clockwise';
            }else if(direction == 'anticlockwise'){
                  direction ='clockwise'
                  // f=15;                 
            }        
          
            console.log('Yes')
           }else{
            if (!direction){
              direction='anticlockwise';
            }else if(direction == 'clockwise'){
                  direction ='anticlockwise'
                  // f=15;   
              console.log("no")              
            }   
           }
         }

        
   });
  }

    return (
        <div className='pod-controller' id='controller' onMouseEnter={tt} >
        <div id='Menu' onClick={home}><h3><a>Menu </a></h3></div>
        <div className='controller-mid' > <i className="fa-solid fa-backward-fast"></i> <div id='enter' className='enter' onClick={loadto}></div>  <i className="fas fa-forward-fast"></i></div>
        <div className='play-pause'><i className="fas fa-play"></i> <i className="fas fa-regular fa-pause"></i></div>
      
      </div>
    ) ;
    }



export default Controller;