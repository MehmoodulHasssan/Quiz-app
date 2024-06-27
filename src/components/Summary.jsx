import React from 'react'
import WinImg from '../assets/quiz-complete.png'
import { QUESTIONS } from '../../questions'

const Summary = ({ answers }) => {
    let cssClass;
    let correct = 0;
    let wrong = 0;
    let skipped = 0;
    let total = QUESTIONS.length;

    QUESTIONS.forEach((ques, index) => {
        answers[index] === null ? skipped++ :
            ques.answers[0] === answers[index] ? correct++ :
                wrong++

    });

    console.log(answers)

    return (
        <div id='summary'>
            <img src={WinImg} alt="trophy he bro" />
            <h2>QUIZCOMPLETED</h2>
            <div id='summary-stats'>
                <p>
                    <span className="number">{Math.round((skipped / total) * 100) + '%'}</span>
                    <span className='text'>SKIPPED</span></p>
                <p>
                    <span className="number">{Math.round((correct / total) * 100) + '%'}</span>
                    <span className='text'>ANSWERED INCORRECTLY</span> </p>
                <p>
                    <span className="number">{Math.round((wrong / total) * 100) + '%'}</span>
                    <span className='text'>ANSWERED INCORRECTLY</span></p >
            </div >
            <ol>

                {QUESTIONS.map((que, index) => {
                    const state = (answers[index] === null) ? 'skipped' :
                        (answers[index] === que.answers[0]) ? 'correct' : 'wrong';
                    return <li key={index}>
                        <h3>{index + 1}</h3>
                        <p className='question'>{que.text}</p>
                        <p className={`user-answer ${state}`}>{answers[index] !== null ? answers[index] : que.answers[0]}</p>
                    </li>
                })}


            </ol>
        </div >
    )
}

export default Summary
