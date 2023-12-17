import React from 'react';

interface AnswerProps {
  option: string;
  handleAnswerSelection: (selectedOption: string) => void;
}

const Answer: React.FC<AnswerProps> = ({ option, handleAnswerSelection }) => {
  return (
    <button onClick={() => handleAnswerSelection(option)}>
      {option}
    </button>
  );
};

export default Answer;
