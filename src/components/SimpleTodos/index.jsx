import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {initialTodosList1: initialTodosList}

  deleteTodo = uniqueNo => {
    const {initialTodosList1} = this.state
    const updatedTodoList = initialTodosList1.filter(
      eachItem => eachItem.id !== uniqueNo,
    )
    this.setState({initialTodosList1: updatedTodoList})
  }

  render() {
    const {initialTodosList1} = this.state
    return (
      <div className="main-contianer">
        <div className="bg-contianer">
          <h1 className="heading">Simple Todos</h1>
          <ul className="todo-list">
            {initialTodosList1.map(eachItem => (
              <TodoItem
                eachItem={eachItem}
                key={eachItem.id}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
