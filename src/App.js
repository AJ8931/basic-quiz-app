import React, { useEffect, useState } from "react";
import "./App.css";
import Start from "./components/start";
import Question from "./components/Questions";
import quizData from './data/quiz.json';
import End from "./components/End";
import Modal from "./components/Modal";

let interval;

const App=()=>
  {
    const[step,setstep]=useState(1);
    const[activeQuestion, setactiveQuestion]=useState(0);
    const[answers, setanswers]=useState([]);
    const [time,setTime]=useState(0);
    const [showModal, setShowModal]= useState(false);

    useEffect(()=>{
      if(step===3){
        clearInterval(interval);
      }
    }, [step])

    const quizStartHandler=()=>{
      setstep(2);
      interval=setInterval(()=>{
        setTime((prevTime)=>prevTime+1);
      }, 1000)

    }

    const resetClickHandler=()=>{
      setactiveQuestion(0);
      setanswers([]);
      setstep(0);
      setTime(0);
      interval=setInterval(() => {
        setstep(2);
        setTime((prevTime)=>prevTime+1);
      },100);
    }


  return (
<>
    <div className='App'>
    { step=== 1 && <Start onQuisStart={quizStartHandler} />}
    { step===2 && <Question 
    data={quizData.data[activeQuestion]}
      onAnswerUpdate={setanswers}
      numberOfQuestions={quizData.data.length}
      onSetActiveQuestion={setactiveQuestion}
      onSetStep={setstep}
      activeQuestion={activeQuestion}
    />
    }
    { step===3 && <End
      results={answers}
      data={quizData.data}
      onReset={resetClickHandler}
      onAnswerCheck={()=>setShowModal(true)}
      time={time}
    />}
  {showModal && <Modal 
  onClose={()=> setShowModal(false) }
  result={answers}
  data={quizData.data}
  />}

    </div>
    </>);
}

export default App;
