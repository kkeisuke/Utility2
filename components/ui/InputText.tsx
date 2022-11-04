import { FC, InputHTMLAttributes, memo } from 'react'

type InputTextProps = InputHTMLAttributes<HTMLInputElement>

export const InputText: FC<InputTextProps> = memo((props) => {
  return <input {...props} type="text" className={`${props.className || ''} rounded border border-gray-400 p-2`.trim()} />
})

InputText.displayName = 'InputText'
