import  React, {  useState } from 'react'
import Header from '../Header/Header'
import {Todo} from '../../types/type'
import TodoList from '../TodoList/TodoList'
import AddTodoInput from '../AddTodoInput/AddTodoInput'
let id = 1
const initialTodoState:Todo[] = [
    // {id:1, text:'Add milk',isCompleted:false},
    // {id:2, text:'Add Cheese',isCompleted:true},
    // {id:3, text:'Make butter',isCompleted:true},
]
    
const Todos = () => {
    const [todos, setTodos] = useState(initialTodoState)
    const [text,setText] = useState('')
    let tasksCompleted = todos.filter(list => !list.isCompleted ).length
    const handleAddTask = (text: string, e: React.FormEvent) => {
        e.preventDefault()
       if(!text) return
        const newTodo={text,id:id++ ,isCompleted:false}
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
            <AddTodoInput
              onAddTask={handleAddTask}
              text={text}
              onChange={handleChange}
            />
            <ul className='shadow-md rounded-md mt-5 px-4 py-2'>
                <TodoList
                    todos={todos}
                    onToggleTodo={handleToggle}
                    tasksCompleted={tasksCompleted}
                />
            </ul>   
        </div>
    )
}

export default Todos