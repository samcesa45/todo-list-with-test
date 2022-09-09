import  React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import AddTodoForm from './AddTodoForm'
import TodoItem from './TodoItem'
import {Todo} from '../../types/type'
const lists:Todo[] = [
    {id:1, text:'Add milk',isCompleted:false},
    {id:2, text:'Add Cheese',isCompleted:true},
    {id:3, text:'Make butter',isCompleted:true},
]
    
const Todos = () => {
    const [todos, setTodos] = useState(lists)
    const [text,setText] = useState('')
    let totalItems = todos.length
    let tasksCompleted = todos.filter(list => !list.isCompleted ).length
    let headingTask = tasksCompleted > 1 ? 'Tasks' :'Task' 
    const handleAddTask = (text: string, e: React.FormEvent) => {
        e.preventDefault()
       if(!text) return
        const newTodo={text,id:Math.floor(Math.random()) ,isCompleted:false}
        setTodos([...todos, newTodo])
        setText('')
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       setText(e.target.value)
    }

    const handleToggle = (selectedTodo: Todo) => {
        const newTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    isCompleted:!todo.isCompleted
                }
            }
            return todo
        })

        setTodos(newTodos)
    }
  return (
        <div className=' w-full lg:w-1/2 mx-auto'>
         <Header title='Todo'/>
          <AddTodoForm onAddTask={handleAddTask} text={ text} onChange={ handleChange}/>
          <ul className='shadow-md rounded-md mt-5 px-4 py-2'>
              {todos.map((todo) => (
                  <TodoItem key={todo.text} todo={todo} onToggleTodo={handleToggle}  />
              ))}
              <div className='flex justify-between mt-4'>
                <p className=''>{tasksCompleted} of {totalItems} {headingTask } left</p>
              <Link to='/followers'>Follow</Link>
             </div>
          </ul>
        </div>
  )
}

export default Todos