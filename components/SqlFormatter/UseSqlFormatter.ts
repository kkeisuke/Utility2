import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react'
import { format } from 'sql-formatter'

const LOCAL_STORAGE_KEY = 'useSqlFormatter.text'

function sqlFormat(text: string) {
  return format(text).split(';').join('\n;\n')
}

type UseSqlFormatter = {
  text: string
  sql: string
  setText: Dispatch<SetStateAction<string>>
}

export function useSqlFormatter(): UseSqlFormatter {
  const [text, setText] = useState('')

  useEffect(() => {
    setText(localStorage.getItem(LOCAL_STORAGE_KEY) || '')
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, text)
  }, [text])

  const sql = useMemo(() => sqlFormat(text), [text])

  return {
    text,
    sql,
    setText
  }
}
