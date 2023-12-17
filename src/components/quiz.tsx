import React, { useState } from 'react';
import Question from '../components/questions';
import quizData from '../data/quizData'; // Assuming questions are in a separate file

interface QuizProps {}

const Quiz: React.FC<QuizProps> = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  // ... other state variables for score, etc.

  const handleAnswerSelection = (answer: string) => {
    setUserAnswers([...userAnswers, answer]);
    // Update score or other necessary state
    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
        <Question
          question={quizData[currentQuestion].question}
          options={quizData[currentQuestion].options}
          handleAnswerSelection={handleAnswerSelection}
        />
    </div>
  );
};

export default Quiz;
