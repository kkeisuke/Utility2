import { ChangeEventHandler, VFC } from 'react'

type InputNumberProps = {
  value: number
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const InputNumber: VFC<InputNumberProps> = (props) => {
  return (
    <input
      type="number"
      value={props.value}
      className="p-2 border border-gray-400"
      onChange={props.onChange}
      onFocus={(event) => {
        event.target.select()
      }}
    />
  )
}
