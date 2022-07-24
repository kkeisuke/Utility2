import { FC } from 'react'
import { useSqlFormatter } from './UseSqlFormatter'
import { Textarea } from '../ui/Textarea'

export const SqlFormatter: FC = () => {
  const { text, sql, onChangeText } = useSqlFormatter()

  return (
    <>
      <Textarea value={text} onChange={onChangeText} />
      <pre className={`overflow-auto bg-gray-100 p-3 ${sql ? 'text-gray-700' : 'text-gray-400'}`}>{sql || 'formatted SQL'}</pre>
    </>
  )
}
