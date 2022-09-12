import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../Header'


describe('Header', () => {
    it('Should render same text passed into title prop', async() => { 
        render(<Header title="My Header" />);
        const headingElement = screen.getByText(/my header/i);
        expect(headingElement).toBeInTheDocument()
    })
})

    