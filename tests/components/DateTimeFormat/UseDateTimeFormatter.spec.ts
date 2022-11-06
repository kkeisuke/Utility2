import { renderHook, act } from '@testing-library/react'
import { useDateTimeFormatter } from '../../../components/DateTimeFormat/UseDateTimeFormatter'

describe('useDateTimeFormatter', () => {
  const defaultCode = "new Intl.DateTimeFormat('ja', {'year':'numeric','month':'2-digit','day':'2-digit'}).format(new Date())"
  const japaneseCode = "new Intl.DateTimeFormat('ja-JP-u-ca-japanese', {'year':'numeric','month':'long','day':'2-digit'}).format(new Date())"

  it('dispatchOption に undefined が指定されると、code に表示されない', () => {
    const { result } = renderHook(() => useDateTimeFormatter())
    expect(result.current.options.hour12).toBe(undefined)
    expect(result.current.code).toBe(defaultCode)
    act(() => {
      result.current.dispatchOption({ hour12: true })
    })
    expect(result.current.options.hour12).toBe(true)
    expect(result.current.code).toBe("new Intl.DateTimeFormat('ja', {'year':'numeric','month':'2-digit','day':'2-digit','hour12':true}).format(new Date())")
  })

  it('changeJapanese で和暦になる。reset でもとに戻る', () => {
    const { result } = renderHook(() => useDateTimeFormatter())
    act(() => {
      result.current.changeJapanese()
    })
    expect(result.current.code).toBe(japaneseCode)
    act(() => {
      result.current.reset()
    })
    expect(result.current.code).toBe(defaultCode)
  })
})
