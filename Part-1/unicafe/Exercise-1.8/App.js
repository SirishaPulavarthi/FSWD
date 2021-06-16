import React, { useState } from 'react'

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  return (
    <div>
      <h1>Statistics</h1>
      <p>Good : {props.good}</p>
      <p>Neutral : {props.neutral}</p>
      <p>Bad : {props.bad}</p>
      <p>All : {total}</p>
      <p>Average : {((props.good*1)+(props.neutral*0)+(props.bad*-1))/total}</p>
      <p>Positive feedback : {(props.good/total)*100} %</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>
        Good
      </button>&nbsp;
      <button onClick={() => setNeutral(neutral + 1)}>
        Neutral
      </button>&nbsp;
      <button onClick={() => setBad(bad + 1)}>
        Bad
      </button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App