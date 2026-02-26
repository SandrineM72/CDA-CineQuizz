import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

export default function Home() {
  return <h1>Home</h1>
}
 
describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})