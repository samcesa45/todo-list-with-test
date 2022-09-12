import { screen, render } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";
type Props = {
    tasksCompleted: number,
    
}

const MockTodoFooter = ({tasksCompleted}:Props)=> {
    return (
        <BrowserRouter>
            <TodoFooter
                tasksCompleted={tasksCompleted}  
            />
        </BrowserRouter>
    )
}

describe('TodoFooter', () => {
    it('Should render the correct amount of tasksCompleted', async () => {
        render(<MockTodoFooter tasksCompleted={5}  />)
        const paragraphElement = screen.getByText(/5 Tasks left/i)
        expect(paragraphElement).toBeInTheDocument()
    })

    it('Should render "Task" when the number of tasksCompleted is one', async () => {
        render(<MockTodoFooter tasksCompleted={1}  />)
        const paragraphElement = screen.getByText(/1 Task left/i)
        expect(paragraphElement).toBeInTheDocument()
    })

})

