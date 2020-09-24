import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ( {onClick, text} ) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const Statistics = ( {good, neutral, bad} ) => {
  let all = good + neutral + bad;

  if (all === 0) {
    return <div>no feedback was given</div>
  }

  let average = ( (good - bad) / all);
  let positive = (good / all) * 100;
  positive += ' %';

  return (
    <table>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={all} />
      <StatisticLine text='average' value={average} />
      <StatisticLine text='positive' value={positive} />
    </table>
  )
}

const StatisticLine = ( {text, value} ) => {
  return (
    <>
      <tr><td>{text} {value}</td></tr>
    </>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text='good'/>
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)