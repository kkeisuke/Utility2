import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import { useDummySVG } from '../../../components/DummySVG/UseDummySVG'

describe('useDummySVG', () => {
  it('params.text があれば title は text になる', () => {
    const { result } = renderHook(() => useDummySVG())
    act(() => {
      result.current.dispatch({ type: 'text', payload: { text: 'タイトル' } })
    })
    expect(result.current.title).toBe('タイトル')
  })

  it('params.text がなければ title は width x height になる', () => {
    const { result } = renderHook(() => useDummySVG())
    act(() => {
      result.current.dispatch({ type: 'width', payload: { width: 300 } })
      result.current.dispatch({ type: 'height', payload: { height: 200 } })
    })
    expect(result.current.title).toBe('300 x 200')
  })

  it('svgData', () => {
    HTMLCanvasElement.prototype.getContext = jest.fn()
    jest.spyOn(React, 'useRef').mockReturnValue({
      current: document.createElement('svg')
    })
    const { result } = renderHook(() => useDummySVG())

    expect(result.current.svgData).toBe('%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%3E%3C%2Fsvg%3E')
  })
})
