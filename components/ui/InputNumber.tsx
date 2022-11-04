import { FC, InputHTMLAttributes, memo } from 'react'

type InputNumberProps = InputHTMLAttributes<HTMLInputElement>

export const InputNumber: FC<InputNumberProps> = memo((props) => {
  return (
    <input
      {...props}
      type="number"
      className={`${props.className || ''} rounded border border-gray-400 p-2`.trim()}
      onFocus={(event) => {
        event.target.select()
        props.onFocus?.(event)
      }}
    />
  )
})

InputNumber.displayName = 'InputNumber'
