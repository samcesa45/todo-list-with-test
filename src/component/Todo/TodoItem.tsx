import {Todo,ToggleTodo} from '../../../type'

type Props = {
    todo: Todo,
    onToggleTodo:ToggleTodo
    
}

const TodoItem = ({todo,onToggleTodo}: Props) => {
  return (
      <li
          key={todo.id}
          className={`border-b py-3 border-gray-200 cursor-pointer ${todo.isCompleted ? 'line-through text-gray-400' : ''}`} onClick={()=>onToggleTodo(todo)}>
          {todo.text}
      </li>
  )
}

export default TodoItem