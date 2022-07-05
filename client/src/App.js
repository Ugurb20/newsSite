import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Topnavbar from "./components/topnavbar";
import Leftnavbar from "./components/leftnavbar";
import Mainbody from "./components/mainbody";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";

function App() {
  useEffect(() => {}, []);
  return (
    <div style={{ height: "100%" }}>
      <Container fluid style={{ padding: 0, margin: 0, height: "100%" }}>
        <div className="flex-contain">
          <div className="myrow1">
            <Topnavbar />
          </div>
          <div className="myrow2" style={{ height: "100%" }}>
            <Leftnavbar />
            <Mainbody style={{ height: "100%" }} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
