import { FC } from 'react'
import { indents, useJsonFormatter } from './UseJsonFormatter'
import { Textarea } from '../ui/Textarea'

export const JsonFormatter: FC = () => {
  const { text, json, indent, setText, setIndent } = useJsonFormatter()

  return (
    <>
      <Textarea value={text} onChange={(event) => setText(event.target.value)} />
      <div className="mb-2">
        {indents.map((i) => {
          return (
            <label key={i} className="mr-2 inline-block cursor-pointer pr-2">
              <input type="radio" name="indent" value={i} checked={i === indent} className="cursor-pointer" onChange={() => setIndent(i)} /> {i === '\t' ? 'tab' : i}
            </label>
          )
        })}
      </div>
      <pre className={`overflow-auto bg-gray-100 p-3 ${json ? 'text-gray-700' : 'text-gray-400'}`}>{json || 'formatted JSON'}</pre>
    </>
  )
}
