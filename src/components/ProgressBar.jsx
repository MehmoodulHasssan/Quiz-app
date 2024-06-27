import React, { useEffect } from 'react'
import { useState, useRef } from 'react'

let timer;
export default function ProgressBar({ timerFunc, timeout, answer }) {
    const [remainingTime, setRemainingTime] = useState(timeout)
    let interval = useRef(null)


    useEffect(() => {
        // console.log('TIMER INIT')
        timer = setTimeout(timerFunc, timeout);

        return () => clearTimeout(timer)
    }, [timerFunc, timeout])

    useEffect(() => {
        // console.log('BAR INIT')
        interval.current = setInterval(() => {
            setRemainingTime(prev => prev -= 100)

        }, 100);
        return () => {
            setRemainingTime(timeout)
            clearInterval(interval.current)
        }
    }, [])

    return (
        <progress className={answer.selectedAnswer !== '' && answer.isCorrect === null ? 'answered' : null} value={timeout - remainingTime} max={timeout} />
    )
}
