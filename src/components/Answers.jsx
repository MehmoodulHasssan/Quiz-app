import React from 'react'
import { useRef } from 'react';

let isSelected;
const Answers = ({ selectedAnswer, options, getAnswer, answerState }) => {
    const shuffledAswers = useRef()

    if (!shuffledAswers.current) {
        function randomSort(arr) {
            return arr
                .map((val) => ({ val, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ val }) => val);
        }

        shuffledAswers.current = randomSort([...options])
    }
    return (
        <ul id="answers">
            {shuffledAswers.current.map((answer, key) => {
                let cssClass = ''

                if (selectedAnswer === answer && answerState === 'selected') {
                    cssClass = 'selected'
                }
                if (answer === selectedAnswer && (answerState === 'correct' || answerState === 'wrong')) {
                    cssClass = answerState
                }

                return <li key={key} className={`answer`} ><button className={cssClass} onClick={() => getAnswer(answer)} disabled={answerState !== ''}>{answer}</button></li>
            })}

        </ul>
    )
}


export default Answers;
