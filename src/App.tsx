import { useState } from 'react';
import './App.css'
import Question from './components/questions'
import quizData from './data/quizData.ts'

function App() {
  const [sampleQuestionIndex, setSampleQuestionIndex] = useState(0);
  const [sampleQuestion, setSampleQuestion] = useState(quizData[sampleQuestionIndex]);

  const handleAnswerSelection = (selectedOption: string) => {
    // Handle answer selection logic here
    if(selectedOption === sampleQuestion.correctAnswer){
      console.log('correct')
      console.log(`Selected option: ${selectedOption}`);
      setSampleQuestionIndex((prevIndex) => prevIndex + 1);
      setSampleQuestion(quizData[sampleQuestionIndex + 1]);
      console.log(sampleQuestionIndex);
    }
    else{
      console.log('incorrect')
      console.log(`Selected option: ${selectedOption}`);
    }
  };

  return (
    <>
      <Question
      question={sampleQuestion.question}
      options={sampleQuestion.options}
      handleAnswerSelection={handleAnswerSelection}
      />
    </>
  )
}

export default App
