import { ChangeEventHandler, VFC } from 'react'

type TextareaProps = {
  value: string
  rows?: number
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
}

export const Textarea: VFC<TextareaProps> = (props) => {
  return <textarea className="p-2 mb-1 w-full border border-gray-400" value={props.value} rows={props.rows || 10} onChange={props.onChange} />
}
