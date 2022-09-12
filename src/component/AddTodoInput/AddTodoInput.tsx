import React from 'react'

type Props = {
    onAddTask: (text: string,e:React.FormEvent) => void,
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
    text:string
}

const AddTodoInput = ({onAddTask,text,onChange}: Props) => {
  return (
        <form>
            <div className='flex justify-between shadow-md rounded-sm px-4 py-3 '>
                <input type="text"
                    className='border-0 focus:outline-none'
                    placeholder='Add a new task here...'
                    value={text}
                    onChange={(e) => onChange(e)}
                />
                <div className=''>
                    <button
                      onClick={(e) => onAddTask(text, e)}
                      className='text-white shadow-lg rounded-sm bg-green-500 px-6'>
                      Add
                    </button>
                </div>
            </div>
        </form>
  )
}

export default AddTodoInput