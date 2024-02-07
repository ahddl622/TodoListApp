import React from 'react'
import TodoProvider from '../context/TodoContext'
import { TodoBody } from '../style/TodoStyle'
import Header from '../components/layout/Header'
import TodoController from '../components/todo/TodoController'

const Home = () => {
  return (
    <TodoProvider>
      <TodoBody>
        <Header />
        <TodoController />
      </TodoBody>
    </TodoProvider>
  )
}

export default Home