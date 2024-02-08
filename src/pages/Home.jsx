import React from 'react'
import TodoProvider from '../context/TodoContext'
import { TodoBody } from '../style/TodoStyle'
import Header from '../components/layout/Header'
import TodoController from '../components/todo/TodoController'

const Home = () => {
  return (
      <TodoBody>
        <Header />
        <TodoController />
      </TodoBody>
  )
}

export default Home