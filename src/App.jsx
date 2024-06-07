import { useState } from 'react'

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

  return (
    <div>
      <h1>My Todo List</h1>
      {/* Gunakan method map di sini */}
      {todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>
      })}
    </div>
  )
}

export default App
