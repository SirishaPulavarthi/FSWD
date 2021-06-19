import React from 'react'

const Course = ({course}) => {
  return (
    <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total exercises={course.parts.map(exercise => exercise['exercises'])} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      {
        props.parts.map(
          (content) =>
            <Part key={content.id} part={content} />
        )
      }
    </div>
  )
}

const Part = ({part}) => {
  return (
    <div>
      <p>{part.name} {part.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  const total = props.exercises.reduce((s, p) => s + p)
  return (
    <div>
      <b>Total of {total} exercises</b>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  return <Course course={course} />
}

export default App