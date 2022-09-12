import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todos from "../Todos";
const MockTodo = ()=> {
    return (
        <BrowserRouter>
            <Todos/>
        </BrowserRouter>
    )
}

const addTask = (tasks: string[]) => {
     const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
     const btnElement = screen.getByRole('button',{name:/Add/i})
    tasks.forEach(task => {
        fireEvent.change(inputElement,{target:{value:task}})
        fireEvent.click(btnElement)
    })
}


describe('Todo', () => {
    it('Should render both the input and the todolist', async () => {
        render(<MockTodo />)
       addTask(["Add milk"])
        const listElement = screen.getByText(/Add milk/i)
        expect(listElement).toBeInTheDocument()
    })

    it('Should render multiple list item', async () => {
        render(<MockTodo />)
       addTask(["Add milk","Add cheese","Add butter"])
        const listElements = screen.getAllByTestId('list')
        expect(listElements.length).toBe(3)
    })

    it('Should not have isCompleted class when initial rendered', async () => {
        render(<MockTodo />)
       addTask(["Add milk"])
        const listElements = screen.getByText(/Add milk/i)
        expect(listElements).not.toHaveClass('line through text-gray-400')
    })

    it('Should  have isCompleted class when clicked', async () => {
        render(<MockTodo />)
       addTask(["Add milk"])
        const listElement = screen.getByText(/Add milk/i)
        fireEvent.click(listElement)
        expect(listElement).toHaveClass('border-b py-3 border-gray-200 cursor-pointer line-through text-gray-400')
    })
})

