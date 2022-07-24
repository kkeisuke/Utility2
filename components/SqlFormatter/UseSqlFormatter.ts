import { ChangeEvent, Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react'
import { format } from 'sql-formatter'

const LOCAL_STORAGE_KEY = 'useSqlFormatter.text'

function sqlFormat(text: string) {
  return format(text).split(';').join('\n;\n')
}

type UseSqlFormatter = {
  text: string
  sql: string
  setText: Dispatch<SetStateAction<string>>
  onChangeText: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export function useSqlFormatter(): UseSqlFormatter {
  const [text, setText] = useState('')

  useEffect(() => {
    setText(localStorage.getItem(LOCAL_STORAGE_KEY) || '')
  }, [])

  const onChangeText: UseSqlFormatter['onChangeText'] = useCallback((event) => {
    setText(event.target.value)
    localStorage.setItem(LOCAL_STORAGE_KEY, event.target.value)
  }, [])

  const sql = useMemo(() => sqlFormat(text), [text])

  return {
    text,
    sql,
    setText,
    onChangeText
  }
}
