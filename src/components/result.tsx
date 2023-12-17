import React from 'react';

interface ResultProps {
  score: number;
}

const Result: React.FC<ResultProps> = ({ score }) => {
  // Calculate score and display result
  
  return (
    <div>
      <h2>Your Score: {score}</h2>
      {/* Display other result details */}
    </div>
  );
};

export default Result;
