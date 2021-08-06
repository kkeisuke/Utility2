import { VFC } from 'react'
import { useSqlFormatter } from './UseSqlFormatter'
import { Textarea } from '../ui/Textarea'

export const SqlFormatter: VFC = () => {
  const { text, sql, setText } = useSqlFormatter()

  return (
    <>
      <Textarea value={text} onChange={(event) => setText(event.target.value)} />
      <pre className={`p-3 overflow-auto bg-gray-100 ${sql ? 'text-gray-700' : 'text-gray-400'}`}>{sql || 'formatted SQL'}</pre>
    </>
  )
}
