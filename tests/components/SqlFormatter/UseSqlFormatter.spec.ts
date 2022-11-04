import { renderHook, act } from '@testing-library/react'
import { useSqlFormatter } from '../../../components/SqlFormatter/UseSqlFormatter'

const targetSQL = `UPDATE "schema"."table" SET "name" = 'テスト' WHERE "schema"."table"."id" = '12345'`

const formatedSQL = `UPDATE
  "schema"."table"
SET
  "name" = 'テスト'
WHERE
  "schema"."table"."id" = '12345'`

describe('useSqlFormatter', () => {
  it('setText に渡した SQL がフォーマットされる', () => {
    const { result } = renderHook(() => useSqlFormatter())
    act(() => {
      result.current.setText(targetSQL)
    })
    expect(result.current.sql).toBe(formatedSQL)
  })

  it('複数のSQL文は改行される', () => {
    const { result } = renderHook(() => useSqlFormatter())
    act(() => {
      result.current.setText(`${targetSQL};${targetSQL}`)
    })
    expect(result.current.sql).toBe(`${formatedSQL}\n;\n\n\n${formatedSQL}`)
  })

  it('空文字の場合は空文字が出力される', () => {
    const { result } = renderHook(() => useSqlFormatter())
    act(() => {
      result.current.setText('')
    })
    expect(result.current.sql).toBe('')
  })
})
