import "./App.css";
import Controller from "./pages/Controller";
import Paths from "./config/Paths";
import { BrowserRouter } from "react-router-dom";
import { Container, Col } from "react-bootstrap";

function App() {
  // var touchArea = document.getElementById('controller');
  // const myRegion = new ZingTouch.Region(touchArea);

  // myRegion.bind(touchArea, 'rotate', function(e){
  //    console.log(e.detail);
  //  });

  return (
    <>
      <Container className="py-3 px-5 main-container">
        <Col className="pod-box mx-auto mt-5" lg="4" xl="4" md="5">
          <BrowserRouter>
              <Col className="pod-display mx-auto mt-5">
                <Paths />
              </Col>
              <Controller />
          </BrowserRouter>
          {/* <Home/> */}
        </Col>
      </Container>
    </>
  );
}

export default App;
