import { renderHook } from '@testing-library/react'
import { useSelect } from '../../../components/ui/Select/UseSelect'

describe('useDateTimeFormatter', () => {
  it('findValue', () => {
    const { result } = renderHook(() =>
      useSelect({
        values: [1, 'test', '', true, null, undefined, NaN]
      })
    )
    expect(result.current.findValue('1')).toBe(1)
    expect(result.current.findValue('test')).toBe('test')
    expect(result.current.findValue('')).toBe('')
    expect(result.current.findValue('true')).toBe(true)
    expect(result.current.findValue('null')).toBe(null)
    expect(result.current.findValue('undefined')).toBe(undefined)
    expect(result.current.findValue('NaN')).toBe(NaN)
    expect(result.current.findValue('未定義')).toBe(undefined)
  })
})
