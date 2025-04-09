import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

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

function MentalMath() {

  const [numA, setNumA] = useState(Math.floor(Math.random() * 100));
  const [numB, setNumB] = useState(Math.floor(Math.random() * 100));
  const [operator, setOperator] = useState(['+', '-', '*', '/'][Math.floor(Math.random() * 4)]);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const inputRef = useRef(null);

  const generateQuestion = () => {
    const operators = ['+', '-', '*', '/'];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    let newNumA, newNumB;

    if (randomOperator === '/') {
      newNumB = Math.floor(Math.random() * 9) + 1; 
      newNumA = newNumB * (Math.floor(Math.random() * 10) + 1); 
    } else if (randomOperator === '-') {
      newNumA = Math.floor(Math.random() * 100);
      newNumB = Math.floor(Math.random() * (newNumA + 1)); 
    } else {
      newNumA = Math.floor(Math.random() * 100);
      newNumB = Math.floor(Math.random() * 100);
    }

    setNumA(newNumA);
    setNumB(newNumB);
    setOperator(randomOperator);
    setUserAnswer("");
    setIsCorrect(null);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      checkAnswer();
    }
  };

  const checkAnswer = () => {
    const correctAnswer = calculate(numA, numB, operator);
    let isUserCorrect;
    const parsedAnswer = parseFloat(userAnswer);
    if (!isNaN(parsedAnswer)) {
      if (typeof correctAnswer === 'number') {
        // Handle potential floating-point inaccuracies with a small tolerance
        isUserCorrect = Math.abs(parsedAnswer - correctAnswer) < 1e-6;
      } else {
        isUserCorrect = userAnswer === correctAnswer;
      }
    } else {
      isUserCorrect = false; // Treat non-numeric input as incorrect
    }
    setIsCorrect(isUserCorrect);
  };

  const nextQuestion = () => {
    generateQuestion();
  };

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Math </strong>
        </h1>
        <p style={{ color: "white" }}>
          This is the math calculator are you ready
        </p>

        <Row className="justify-content-center">
          <Col md={6} className="mt-4">
            <div style={{ backgroundColor: "#171717", padding: "20px", borderRadius: "8px", textAlign: "center" }}>
              <h2 style={{ color: "white" }}>{numA} {operator} {numB} = ?</h2>
              <input
                ref={inputRef}
                type="text"
                value={userAnswer}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress} 
                className="form-control mb-3"
                placeholder="Your answer"
                style={{ backgroundColor: "#212529", color: "white" }}
              />
              <Button variant="primary" onClick={checkAnswer} className="me-2">
                Check Answer
              </Button>
              <Button variant="success" onClick={nextQuestion} disabled={isCorrect === null}>
                Next Question
              </Button>
              {isCorrect !== null && (
                <div className={`mt-3 ${isCorrect ? "text-success" : "text-danger"}`}>
                  {isCorrect ? "Correct!" : `Wrong! The answer is ${calculate(numA, numB, operator)}`}
                </div>
              )}
            </div>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default MentalMath;
