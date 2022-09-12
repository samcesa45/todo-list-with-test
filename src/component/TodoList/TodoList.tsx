import {Todo,ToggleTodo} from '../../types/type'
import TodoFooter from '../TodoFooter/TodoFooter'

type Props = {
    todos: Todo[],
    onToggleTodo: ToggleTodo,
    tasksCompleted:number
    
}

const TodoList = ({todos,onToggleTodo,tasksCompleted}: Props) => {
    return (
        <>     
            {todos.map((todo) => (
                <li
                key={todo.id}
                    className={`border-b py-3 border-gray-200 cursor-pointer ${todo.isCompleted ? 'line-through text-gray-400' : ''}`}
                    onClick={() => onToggleTodo(todo)}
                    data-testid='list'
                >
                {todo.text}
                </li>
            ))}
            <TodoFooter
                tasksCompleted={tasksCompleted}
            />
        </>
    )
}

export default TodoList