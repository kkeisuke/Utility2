import { renderHook, act } from '@testing-library/react-hooks'
import { NOT_JSON, useJsonFormatter } from '../../../components/JsonFormatter/UseJsonFormatter'

const targetJson = '{"hoge": "huga", "huge": "hoga"}'

const formatedJson = `{
  "hoge": "huga",
  "huge": "hoga"
}`

describe('useJsonFormatter', () => {
  it('setText に渡した JSON がフォーマットされる', () => {
    const { result } = renderHook(() => useJsonFormatter())
    act(() => {
      result.current.setText(targetJson)
    })
    expect(result.current.json).toBe(formatedJson)
  })

  it(`JSON 以外のテキストの場合 ${NOT_JSON} が出力される`, () => {
    const { result } = renderHook(() => useJsonFormatter())
    act(() => {
      result.current.setText('テスト')
    })
    expect(result.current.json).toBe(NOT_JSON)
  })

  it('空文字の場合は空文字が出力される', () => {
    const { result } = renderHook(() => useJsonFormatter())
    act(() => {
      result.current.setText('')
    })
    expect(result.current.json).toBe('')
  })
})
