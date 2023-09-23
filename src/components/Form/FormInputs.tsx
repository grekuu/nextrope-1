import "./formInputs.scss";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

const FormInputs = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval: number | undefined;
    if (running) {
      interval = window.setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (interval !== undefined) {
      window.clearInterval(interval);
    }
    return () => {
      if (interval !== undefined) {
        window.clearInterval(interval);
      }
    };
  }, [running]);

  return (
    <Container className="form-inputs-container">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Work Description</Form.Label>
          <Form.Control type="text" placeholder="FormInputs component" />
        </Form.Group>
        <Button
          variant="primary"
          className="input-btn"
          onClick={() => setRunning(true)}
        >
          Start
        </Button>
        <Button
          variant="primary"
          className="input-btn"
          onClick={() => setRunning(false)}
        >
          Stop
        </Button>
        <Button
          variant="primary"
          className="input-btn"
          onClick={() => setTime(0)}
        >
          Reset
        </Button>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </Form>
    </Container>
  );
};

export default FormInputs;
