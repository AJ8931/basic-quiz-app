import React, { useEffect, useState } from "react";

const End=({results, data, onReset, onAnswerCheck, time})=>{

    const[CorrectAnswer,setCorrectAnwers]=useState(0);

    useEffect(()=>{
        let correct=0;
        results.forEach((result,index)=>{
            if(result.a=== data[index].answer){
                correct++;
            }
        })
        setCorrectAnwers(correct);
    }, []);

    return(
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h3>your result</h3>
                    <p><strong>{CorrectAnswer} out of {data.length}</strong></p>
                    <p><strong>{Math.floor((CorrectAnswer/data.length)*100)}%</strong></p>
                    <p><strong>Your Time</strong>{time}</p>
                    <button className="button is-info mr-2" onClick={onAnswerCheck} >Check Your Answers</button>
                    <button className="button is success" onClick={onReset} > Try Again</button>
                </div>
            </div>
        </div>
    );
}
export default End;