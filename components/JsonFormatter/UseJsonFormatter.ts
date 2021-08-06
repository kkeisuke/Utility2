import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const LOCAL_STORAGE_KEY = 'useJsonFormatter.text'
export const indents = [2, 4, '\t'] as const
export const NOT_JSON = 'Not JSON'

type Indent = typeof indents[number]

type UseJsonFormatter = {
  text: string
  json: string
  indent: Indent
  setText: Dispatch<SetStateAction<string>>
  setIndent: Dispatch<SetStateAction<Indent>>
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
  const [json, setJson] = useState('')

  useEffect(() => {
    setText(localStorage.getItem(LOCAL_STORAGE_KEY) || '')
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, text)
    setJson(jsonFormat(text, indent))
  }, [text, indent])

  return {
    text,
    json,
    indent,
    setText,
    setIndent
  }
}
