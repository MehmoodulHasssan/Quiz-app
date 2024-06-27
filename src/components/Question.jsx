import React from 'react'
import ProgressBar from './ProgressBar'
import Answers from './Answers'
import { QUESTIONS } from '../../questions'
import { useState } from 'react'

export default function Question({ currentQue, answers, handleSkipAnswer, onSelectAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null
  })
  let timeout = 10000

  if (answer.selectedAnswer !== '') {
    timeout = 1000
  }
  if (answer.isCorrect !== null) {
    timeout = 2000
  }

  function getAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null
    })

    setTimeout(() => {
      if (answer === QUESTIONS[currentQue].answers[0]) {
        setAnswer({
          selectedAnswer: answer,
          isCorrect: true
        })
      } else {
        setAnswer({
          selectedAnswer: answer,
          isCorrect: false
        })
      }
      setTimeout(() => {
        onSelectAnswer(answer)
        timeout = 3000
      }, 2000);
    }, 1000);
  }
  let answerState = '';
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong'
    // console.log(answerState)
  } else {
    if (answer.selectedAnswer) {
      answerState = 'selected'
    }
  }

  return (
    <div id="question">

      <ProgressBar
        key={timeout}
        timeout={timeout}
        timerFunc={answer.selectedAnswer === '' ? () => handleSkipAnswer(null) : null}
        answer={answer} />
      <h2>{QUESTIONS[currentQue].text}</h2>


      <Answers
        options={QUESTIONS[currentQue].answers}
        answers={answers}
        answerState={answerState}
        getAnswer={getAnswer}
        selectedAnswer={answer.selectedAnswer} />

    </div>
  )
}
