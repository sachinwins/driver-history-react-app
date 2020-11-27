import { render, screen } from '@testing-library/react'
import React from 'react'
import App from './App'

test('Renders App', () => {
  render(<App />)
  const linkElement = screen.getByText(/driver/i)
  expect(linkElement).toBeInTheDocument()
})
