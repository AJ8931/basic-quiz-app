import React, { useState,useEffect,useRef } from "react";


const Question =({data, onAnswerUpdate, numberOfQuestions, onSetActiveQuestion, activeQuestion, onSetStep})=>{

    const [selected,setselected]= useState('');
    const [error, setError]= useState('');
    const radioswrapper= useRef();

    useEffect( ()=>{
            const findCheckedInput= radioswrapper.current.querySelector('input:checked');
            if(findCheckedInput){
                findCheckedInput.checked = false;
            }
    } ,[data]);


const changeHandler =(e)=>{

    setselected(e.target.value);
    if(error){
        setError('');
    }
}

    const nextClickHandler=(e)=>{

        if(selected===''){
            return setError('Please Select One!');
        }
        onAnswerUpdate(prevState =>[...prevState, {q: data.questions, a: selected } ] );
        setselected('');
        onSetActiveQuestion(0);
        if(activeQuestion < numberOfQuestions-1 ){
            onSetActiveQuestion(activeQuestion+1);
        }else{
            onSetStep(3);
        }
    }

    return(
            <div className="cardo">
        <div className="card">
            <div className="card-content">
                <div className="content">
                <h2 className="mb-5">{data.questions}</h2>
                <div className="control" ref={radioswrapper} >
                {
                data.choices.map(
                    (choice,i)=>(
                <label htmlFor="" className="radio has-background-light" key={i} >
                <input type="radio" name="answer" value={choice} onChange={ changeHandler } />
                {choice}
            </label>
                ))}
        </div>
            {error && <div  className="has-text-danger" >{error}</div>}
                <button className="button is-link is-medium is-fullwidth mt-4 " onClick={nextClickHandler} >Next</button>
        </div>
    </div>
</div>
</div>
    );
}
export default Question;
