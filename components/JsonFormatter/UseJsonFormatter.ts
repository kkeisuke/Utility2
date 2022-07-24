import { ChangeEvent, Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react'

const LOCAL_STORAGE_KEY = 'useJsonFormatter.text'
export const indents = [2, 4, '\t'] as const
export const NOT_JSON = 'Not JSON'

type Indent = typeof indents[number]

type UseJsonFormatter = {
  text: string
  json: string
  indent: Indent
  setIndent: Dispatch<SetStateAction<Indent>>
  onChangeText: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

function jsonFormat(text: string, indent: Indent) {
  if (text === '') {
    return ''
  }
  try {
    const parsed = JSON.parse(text)
    return JSON.stringify(parsed, null, indent)
  } catch (error) {
    return NOT_JSON
  }
}

export function useJsonFormatter(): UseJsonFormatter {
  const [text, setText] = useState('')
  const [indent, setIndent] = useState<Indent>(indents[0])

  useEffect(() => {
    setText(localStorage.getItem(LOCAL_STORAGE_KEY) || '')
  }, [])

  const onChangeText: UseJsonFormatter['onChangeText'] = useCallback((event) => {
    setText(event.target.value)
    localStorage.setItem(LOCAL_STORAGE_KEY, event.target.value)
  }, [])

  const json = useMemo(() => jsonFormat(text, indent), [text, indent])

  return {
    text,
    json,
    indent,
    setIndent,
    onChangeText
  }
}
