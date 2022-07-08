import { ChangeEventHandler, VFC } from 'react'

type TextareaProps = {
  value: string
  rows?: number
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
}

export const Textarea: VFC<TextareaProps> = (props) => {
  return <textarea className="mb-1 w-full rounded border border-gray-400 p-2" value={props.value} rows={props.rows || 10} onChange={props.onChange} />
}
