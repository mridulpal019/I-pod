import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ZingTouch from "zingtouch";
import List from "../config/List";
import { Col, Row } from "react-bootstrap";

const Controller = () => {
  const navigate = useNavigate();
  //  const menu=(e)=>{
  //   e.preventDefault();
  //   navigate('/')
  console.log(window.location.pathname, "path name");
  const List = [
    ["cover-flow", "music", "games", "settings"],
    ["all-songs", "artist", "albums"],
  ];
  console.log(List[0]);

  //  }
  const home = (e) => {
    e.preventDefault();
    navigate("/");
  };
  var touchArea;

  var angle;
  // console.log(angle)
  var direction;
  const tt = () => {
    touchArea = document.getElementById("controller");
    const myRegion = new ZingTouch.Region(touchArea);
    console.log("called");
    var f = 15;
    let direction;

    myRegion.bind(touchArea, "rotate", function (e) {
      angle = e.detail.angle;
      console.log(direction);

      if (Math.abs(e.detail.distanceFromOrigin) > f) {
        console.log("bingo", f);
        f += 15;
        if (e.detail.distanceFromLast > 0) {
          if (!direction) {
            direction = "clockwise";
          } else if (direction == "anticlockwise") {
            direction = "clockwise";
            f = 15;
          }

          console.log("Yes");
        } else {
          if (!direction) {
            direction = "anticlockwise";
          } else if (direction == "clockwise") {
            direction = "anticlockwise";
            f = 15;
            console.log("no");
          }
        }
      }
      console.log(e.detail);
    });
  };

  return (
    <Row
      className="pod-controller mx-auto mt-4 d-flex justify-content-center"
      id="controller"
      onMouseEnter={tt}
      
    >
      <Row id="Menu" className="mx-auto d-flex justify-content-center align-items-center"  onClick={home}>
        <h3 className="text-center align-self-center">Menu</h3>
      </Row>
      <Row className="controller-mid mx-auto d-flex justify-content-center align-items-center" >
        <Col className=" d-flex justify-content-center align-items-center"  lg='3' md='3' xs='3'>
          <i className="fa-solid fa-backward-fast "></i>
        </Col>
        <Col id="enter" className="enter mx-2" lg='6' md='6' xs='6'></Col>
        <Col className=" d-flex justify-content-center align-items-center" lg='3' md='3' xs='3'>
          <i className="fas fa-forward-fast"></i>
        </Col>
      </Row>
      <Row className="play-pause mx-auto d-flex justify-content-center" >
        <Col className="d-flex justify-content-center align-items-center" lg='1' md='1' xs='1'><i className="fas fa-play"></i></Col>
        <Col className="d-flex justify-content-center align-items-center" lg='1' md='1' xs='1'><i className="fas fa-regular fa-pause"></i></Col>
        
        
      </Row>
    </Row>
  );
};

export default Controller;
