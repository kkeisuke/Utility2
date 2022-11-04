import { FC, memo, TextareaHTMLAttributes } from 'react'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea: FC<TextareaProps> = memo((props) => {
  return <textarea {...props} className={`${props.className || ''} mb-1 w-full rounded border border-gray-400 p-2`.trim()} rows={props.rows || 10} />
})

Textarea.displayName = 'Textarea'
