import { Link } from "react-router-dom"


type Props = {
    tasksCompleted: number,
}

const TodoFooter = ({tasksCompleted}: Props) => {
  return (
    <div className='flex justify-between mt-4'>
        <p className=''>{tasksCompleted}  {tasksCompleted > 1 ? 'Tasks' :'Task' } left</p>
        <Link to='/followers'>Follow</Link>
    </div>
  )
}

export default TodoFooter