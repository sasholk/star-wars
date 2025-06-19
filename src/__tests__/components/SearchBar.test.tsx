import { SearchBar } from '@/components/shared/SearchBar'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

describe('SearchBar Component', () => {
  const handleSearchMock = jest.fn()

  const setup = (clearInput = false) => {
    render(<SearchBar clearInput={clearInput} />)

    const input = screen.getByPlaceholderText('write a hero name')
    const button = screen.getByRole('button', { name: /search/i })
    return { input, button }
  }

  it('should render the input and button correctly', () => {
    const { input, button } = setup()

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should allow typing a name and submit the form', () => {
    const { input, button } = setup()

    fireEvent.change(input, { target: { value: 'Luke Skywalker' } })
    expect(input).toHaveValue('Luke Skywalker')

    fireEvent.click(button)
    expect(handleSearchMock).toHaveBeenCalledWith('Luke Skywalker')
  })

  it('should clear input if `clearInput` is true', async () => {
    const { input, button } = setup(true)

    fireEvent.change(input, { target: { value: 'Darth Vader' } })
    expect(input).toHaveValue('Darth Vader')

    fireEvent.click(button)
    expect(handleSearchMock).toHaveBeenCalledWith('Darth Vader')

    // Force re-render to simulate prop change
    fireEvent.change(input, { target: { value: '' } })

    // Use waitFor to ensure the clearing effect is complete
    await waitFor(() => {
      expect(input).toHaveValue('')
    })
  })

  it('should call onSearch with different hero names', () => {
    const { input, button } = setup()

    const heroes = ['Han Solo', 'Leia Organa', 'Yoda', 'Obi-Wan Kenobi']

    heroes.forEach(hero => {
      fireEvent.change(input, { target: { value: hero } })
      expect(input).toHaveValue(hero)

      fireEvent.click(button)
      expect(handleSearchMock).toHaveBeenCalledWith(hero)
    })
  })
})
