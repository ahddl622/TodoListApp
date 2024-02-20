import React from 'react'
import Header from '../components/layout/Header'
import TodoController from '../components/todo/TodoController'
import { TodoBody } from '../style/TodoStyle'

const Home = () => {
  return (
      <TodoBody>
        <Header />
        <TodoController />
      </TodoBody>
  )
}

export default Home