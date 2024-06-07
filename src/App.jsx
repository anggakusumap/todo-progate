import { useState } from 'react'
import Todos from './components/Todos';

const data = [
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ]

function App() {
  const [todos, setTodos] = useState(data);

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div>
      <h1>My Todo List</h1>
      <Todos todos={todos} toggleCompleted={toggleCompleted} />
    </div>
  )
}

export default App
