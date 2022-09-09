import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../Header'


describe('Header test', () => {
    test('Should show a title', async() => { 
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument()
    })
})