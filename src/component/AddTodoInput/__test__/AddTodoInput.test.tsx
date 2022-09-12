import { render, screen, fireEvent } from '@testing-library/react'
import AddTodoInput from '../AddTodoInput'

const mockedonAddTask = jest.fn()
const mockedonChange= jest.fn()
describe('AddTodoInput', () => {
    it('Should render input element', async () => {
        render(<AddTodoInput onAddTask={mockedonAddTask} text={ ''} onChange={mockedonChange} />)
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        expect(inputElement).toBeInTheDocument()
    })

    it('Should be able to type in input', async () => {
        render(<AddTodoInput onAddTask={mockedonAddTask} text={ 'Buy bread'} onChange={mockedonChange} />)
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        fireEvent.change(inputElement,{target:{value:'Buy bread'}})
        expect(inputElement).toHaveValue('Buy bread')
    })

    it('Should have empty input when add button is clicked', async () => {
        render(<AddTodoInput onAddTask={mockedonAddTask} text={ ''} onChange={mockedonChange} />)
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        fireEvent.change(inputElement,{target:{value:'Buy bread'}})
        const buttonElement = screen.getByRole('button', { name: /Add/i })
        fireEvent.click(buttonElement)
        expect(inputElement).toHaveValue('')
    })
})