import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MathCards from "./MathCards";
import Particle from "../Particle";

const numA = 0
const numB = 0
const operator = ""

function* randomMathGenerator() {
  const operators = ['+', '-', '*', '/']; // Use '*' for multiplication
  while (true) {
    const numA = Math.floor(Math.random() * 100); // Random integer between 0 and 99
    const numB = Math.floor(Math.random() * 100); // Random integer between 0 and 99
    const operator = operators[Math.floor(Math.random() * operators.length)];

    yield { numA, numB, operator };
  }
}

function calculate(numA, numB, operator) {
  switch (operator) {
      case '+':
          return numA + numB;
      case '-':
          return numA - numB;
      case '*':
          return numA * numB;
      case '/':
          if (numB === 0) {
              return "Cannot divide by zero";
          }
          return numA / numB;
      default:
          return "Invalid Operator";
  }
}

function Math() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Math </strong>
        </h1>
        <p style={{ color: "white" }}>
          This is the math calculator are you ready
        </p>
 
      </Container>
    </Container>
  );
}

export default Math;
