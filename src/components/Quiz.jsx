import React from 'react'
import { QUESTIONS } from '../../questions'
import { useState, useCallback, useRef } from 'react'

import Question from './Question'
import Summary from './Summary'



export default function Quiz() {
    const [answers, setAnswers] = useState([])
    let completed = useRef(false)

    const currentQue = answers.length
    answers.length === QUESTIONS.length ? completed.current = true : false

    const getAnswer = useCallback(
        function getAnswer(answer) {
            answers.length < QUESTIONS.length && setAnswers(prev => [...prev, answer])
        }, [])


    const handleSkipAnswer = useCallback(
        () => getAnswer(null)
        // function getAnswer(answer) {
        //     // console.log('NULL Started..')

        //     answers.length < QUESTIONS.length && setAnswers(prev => [...prev, answer])
        , [getAnswer])


    // console.log(answers)

    return (!completed.current ? <main id="quiz">
        <Question
            key={currentQue}
            answers={answers}
            handleSkipAnswer={handleSkipAnswer}
            onSelectAnswer={getAnswer}
            currentQue={currentQue}
        />
    </main>
        : <Summary
            answers={answers}
        />

    )
}
