import React, { useState } from 'react'

const Statistic = (props) => {
  return (

        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>

  )
}

const Statistics = (props) => {
  if((props.good === 0) && (props.neutral === 0) && (props.bad === 0)) {
    return (
      <div>
        <h1>Statistics</h1>
        No Feedback given
      </div>
    )
  }
  const total = props.good + props.neutral + props.bad
  return (
    <div>
      <h1>Statistics</h1>
      <Statistic text="Good" value={props.good} />
      <Statistic text="Neutral" value={props.neutral} />
      <Statistic text="Bad" value={props.bad} />
      <Statistic text="All" value={total} />
      <Statistic text="Average" value={((props.good*1)+(props.neutral*0)+(props.bad*-1))/total} />
      <Statistic text="Positive feedback " value={(props.good/total)*100 + '%'} />
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })
  const handleGoodClick = () => {
    setClicks({ ...clicks, good: clicks.good + 1 })
  }
  const handleNeutralClick = () => {
    setClicks({ ...clicks, neutral: clicks.neutral + 1 })
  }
  const handleBadClick = () => {
    setClicks({ ...clicks, bad: clicks.bad + 1 })
  }
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text='Good' />&nbsp; 
      <Button handleClick={handleNeutralClick} text='Neutral' />&nbsp;
      <Button handleClick={handleBadClick} text='Bad' />
      <Statistics good={clicks.good} neutral={clicks.neutral} bad={clicks.bad} />
    </div>
  )
}

export default App
