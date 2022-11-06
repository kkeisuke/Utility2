import { render } from '@testing-library/react'
import { Button } from '../../../components/ui/Button'

describe('Button', () => {
  it('タグ名 button', () => {
    const result = render(<Button data-testid="button" />)
    expect(result.getAllByTestId('button')[0].tagName).toBe('BUTTON')
  })
  it('タグ名 a', () => {
    const result = render(<Button data-testid="button" href="" />)
    expect(result.getAllByTestId('button')[0].tagName).toBe('A')
  })
})
