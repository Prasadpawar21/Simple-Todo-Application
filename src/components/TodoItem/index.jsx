// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachItem, deleteTodo} = props

  const {id, title} = eachItem

  const deleteCurrentTodo = () => {
    deleteTodo(id)
  }

  return (
    <li key={id} className="todo-container">
      <p className="title">{title}</p>
      <button
        type="button"
        onClick={deleteCurrentTodo}
        className="delete-button"
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
