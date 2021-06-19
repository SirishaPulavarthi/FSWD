import React from 'react'

const Course = ({course}) => {
  return (
    <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total exercises={course.parts.map(exercise => exercise['exercises'])} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
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

export default Course