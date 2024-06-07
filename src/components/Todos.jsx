import TodoItem from "./TodoItem"


const Todos = ({ todos, toggleCompleted }) => {
  return (
    <div>
      {todos.map((todo) => {
        // Berikan datanya ke TodoItem
        return <TodoItem key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />
      })}
    </div>
  )
}

export default Todos