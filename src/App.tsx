import './App.css'
import Question from './components/questions'
import quizData from './data/quizData.ts'

function App() {
  const sampleQuestionIndex = 0; // Adjust this index as needed
  const sampleQuestion = quizData[sampleQuestionIndex];

  const handleAnswerSelection = (selectedOption: string) => {
    // Handle answer selection logic here
    console.log(`Selected option: ${selectedOption}`);
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
