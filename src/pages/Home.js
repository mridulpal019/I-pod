import React from "react";
import { Container, Col } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";


const Home=()=>{
    
    
    return (
        
        <Col className="Menu-list list d-flex flex-column pt-5 pb-3">
            <Col className=''  ><h3 style={{fontWeight:'700',fontSize:'30px'}} >I-pod</h3></Col>
            <Col className=''  ><h5 style={{fontWeight:'700',fontSize:'20px'}} id="cover-flow" >Cover Flow <span> &#8883; </span> </h5></Col>
            <Col className=''  ><h5 style={{fontWeight:'700',fontSize:'20px'}} id="music" >Music <span> &#8883; </span></h5></Col>
            <Col className=''  ><h5 style={{fontWeight:'700',fontSize:'20px'}} id="games" >Games <span> &#8883;</span> </h5></Col>
            <Col className=''  ><h5 style={{fontWeight:'700',fontSize:'20px'}} id="settings" >Settings <span> &#8883;</span></h5></Col>      
        </Col>
    ) ;
    }



export default Home;