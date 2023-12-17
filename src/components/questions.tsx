import React from 'react';

interface QuestionProps {
  question: string;
  options: string[];
  handleAnswerSelection: (selectedOption: string) => void;
}


const Question: React.FC<QuestionProps> = ({ question, options, handleAnswerSelection }) => {
  return (
    <div>
      <h2>{question}</h2>
      {options.map(option => (
        <button key={option} onClick={() => handleAnswerSelection(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;