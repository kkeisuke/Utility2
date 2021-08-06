import { VFC } from 'react'
import { indents, useJsonFormatter } from './UseJsonFormatter'
import { Textarea } from '../ui/Textarea'

export const JsonFormatter: VFC = () => {
  const { text, json, indent, setText, setIndent } = useJsonFormatter()

  return (
    <>
      <Textarea value={text} onChange={(event) => setText(event.target.value)} />
      <div className="mb-2">
        {indents.map((i) => {
          return (
            <label key={i} className="inline-block pr-2 mr-2 cursor-pointer">
              <input type="radio" name="indent" value={i} checked={i === indent} className="cursor-pointer" onChange={() => setIndent(i)} /> {i === '\t' ? 'tab' : i}
            </label>
          )
        })}
      </div>
      <pre className={`p-3 overflow-auto bg-gray-100 ${json ? 'text-gray-700' : 'text-gray-400'}`}>{json || 'formatted JSON'}</pre>
    </>
  )
}
