import React from "react";

const Start=({ onQuisStart })=>{
    return(
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1>Start The Quiz</h1>
                    <p>good luck!</p>
                    <button className="button is-info is-medium" onClick={ onQuisStart } >Start</button>
                </div>
            </div>
        </div>
    );
}
export default Start;