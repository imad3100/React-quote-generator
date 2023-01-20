import React, { useState } from 'react';
import Quiz from './Quiz';
import questions from '../questions';


function QuizParent() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizEnd, setQuizEnd] = useState(false);

    const handleSubmit = (answer) => {

        if(!answer){
        alert("choose an option") 
        return
        }

        if (answer === questions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }
        if (currentQuestionIndex === questions.length - 1) {
            setQuizEnd(true);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
        
    };
    const handleReplay = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setQuizEnd(false);
    };

    return (
        <div>
            {!quizEnd ? (
                <Quiz
                    question={questions[currentQuestionIndex].question}
                    options={questions[currentQuestionIndex].options}
                    onSubmit={handleSubmit}
                    index={currentQuestionIndex}
                    totalQuestions={questions.length}
                    />
            ) : (
                <div className='game-over'>The Quiz is over, Your score is {score} / {questions.length}
                
                <button className='quiz-replay' onClick={handleReplay}>Replay</button>

                </div>
            )}
        </div>
    );
}

export default QuizParent;