import React, { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
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
      <h1>Statistics</h1>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>
      <p>All : {total}</p>
      <p>Average : {((good*1)+(neutral*0)+(bad*-1))/total}</p>
      <p>Positive feedback : {(good/total)*100} %</p>
    </div>
  )
}

export default App