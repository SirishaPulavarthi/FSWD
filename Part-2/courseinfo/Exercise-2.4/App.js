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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div>
      <h1>Web Development Curriculum</h1>
      {
        courses.map(
          (element) =>
            <Course key={element.id} course={element} />
        )
      }
    </div>
  )
}

export default App