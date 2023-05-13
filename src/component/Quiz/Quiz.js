import React, { useState } from "react";
import "./Quiz.css";
import { Link } from "react-router-dom";

// import "../Quiz/Quiz.css";
export default function Quiz() {
  const questions = [
    {
      questionText:
        "What is the correct command to create a new React project?",
      answerOptions: [
        { answerText: "npm create-react-app", isCorrect: false },
        { answerText: "npm create-react-app myReactApp", isCorrect: false },
        { answerText: "npx create-react-app myReactApp", isCorrect: true },
        { answerText: "npm create-react-app ", isCorrect: false },
      ],
    },
    {
      questionText:
        "What command is used to start the React local development server?",
      answerOptions: [
        { answerText: "npm serve", isCorrect: false },
        { answerText: "npm start", isCorrect: true },
        { answerText: "npm run dev", isCorrect: false },
        { answerText: "npm build", isCorrect: false },
      ],
    },
    {
      questionText:
        "What is the default local host port that a React development server uses?",
      answerOptions: [
        { answerText: "3000", isCorrect: true },
        { answerText: "9000", isCorrect: false },
        { answerText: "3500", isCorrect: false },
        { answerText: "4000", isCorrect: false },
      ],
    },
    {
      questionText: "Which keyword creates a constant in JavaScript?",
      answerOptions: [
        { answerText: "constant", isCorrect: false },
        { answerText: "let", isCorrect: false },
        { answerText: "var", isCorrect: false },
        { answerText: "const", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="exit-button">
        <Link to="/home">
          <input type="btn" value="Exit" />
        </Link>
      </div>
    </div>
  );
}
