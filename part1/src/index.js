import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => <h1>{course}</h1>

const Content = ({part1,exc1,part2,exc2,part3,exc3}) => (
  <div>
    <Part part={part1} exercise={exc1}/>
    <Part part={part2} exercise={exc2}/>
    <Part part={part3} exercise={exc3}/>
  </div>
)

const Total = ({exercises1, exercises2, exercises3}) => <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>

const Part = ({part, exercise}) => <p>{part} {exercise}</p>

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3} exc1={exercises1} exc2={exercises2} exc3={exercises3}/>      
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))