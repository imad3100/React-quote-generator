// Quiz.js
import React, { useState } from 'react';
import '../Quiz.css';

  const Quiz = ({ question, options, onSubmit,index,totalQuestions }) => {
  const [selectedOption, setSelectedOption] = useState('');

  function handleClick(e) {
    const prevOption = document.querySelector('.clicked');
    if (prevOption) {
      prevOption.classList.remove('clicked');
    }
    e.target.parentElement.classList.toggle("clicked")
    
  }

  return (
    <div className="quiz-container" >
      <h1 className='quiz-question'> {question}</h1>
      <form className="quiz" onSubmit={e => {
        e.preventDefault();
        onSubmit(selectedOption);
      }}>
        {options.map(option => (
          <div className='quiz-option'  key={option}>
            <input id={option} className='quiz-option-input'
              type="radio"
              name="options"
              value={option}

              onChange={e => setSelectedOption(e.target.value)}
            />
            <label  onClick={handleClick}   for={option} className='quiz-option-label'>{option}</label>
          </div>
        ))}
        
        <button className='quiz-submit-button' type="submit">Submit</button>
      </form>
      <div className="quiz-question-index">{`Question ${index + 1} of ${totalQuestions}`}</div>
    </div>
  );
};

export default Quiz;
