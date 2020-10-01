import React, {useState} from 'react';
import {
    Button,
    Row,
    Col,
    Container
} from "react-bootstrap";
import './App.css';
import {run} from "./runningbutton";

function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("Try to click me :)")
    const set = () => {
        setCount(count + 1)
        setText("YOU WIN")
    }
  return (
      <Container className="text-center align-self-center button-container">
          Clicked times: {count}
          <Row>
              <Col>
                  <Button
                      onMouseEnter={(e) => run(e)}
                      onClick={set}
                      className={"button"} variant={"warning"} id={"button"}>
                      {text}
                  </Button>
              </Col>
          </Row>
      </Container>
  );
}

export default App;
