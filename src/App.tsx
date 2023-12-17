import { useState } from 'react';
import './App.css'
import Question from './components/questions'
import quizData from './data/quizData.ts'
import Result from './components/result.tsx';

function App() {
  const [sampleQuestionIndex, setSampleQuestionIndex] = useState(0);
  const [sampleQuestion, setSampleQuestion] = useState(quizData[sampleQuestionIndex]);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const handleAnswerSelection = (selectedOption: string) => {
    // Handle answer selection logic here
    if(selectedOption === sampleQuestion.correctAnswer){
      if(sampleQuestionIndex + 1 === quizData.length){
      console.log('correct');
      console.log(`Selected option: ${selectedOption}`);
      setResult(true)
      }else{
        console.log('correct');
        console.log(`Selected option: ${selectedOption}`);
        setSampleQuestionIndex((prevIndex) => prevIndex + 1);
        setSampleQuestion(quizData[sampleQuestionIndex + 1]);

      }
      setScore((prevScore) => prevScore + 1);
      console.log(sampleQuestionIndex);
    }
    else{
      if(sampleQuestionIndex + 1 === quizData.length){
        console.log('incorrect');
        console.log(`Selected option: ${selectedOption}`);
      }else{
        console.log('incorrect');
        console.log(`Selected option: ${selectedOption}`);
        setSampleQuestionIndex((prevIndex) => prevIndex + 1);
        setSampleQuestion(quizData[sampleQuestionIndex + 1]);
        console.log(`Selected option: ${selectedOption}`);
      }
    }
  };

  return (
    <>
    <div>

    </div>
    <div>
    {result ? (
        <Result score={score} />
      ) :
    <><div>
            <h1>Question {sampleQuestionIndex + 1}/{quizData.length}</h1>
          </div><Question
              question={sampleQuestion.question}
              options={sampleQuestion.options}
              handleAnswerSelection={handleAnswerSelection} /></>}
    </div>
    </>
  )
}

export default App


