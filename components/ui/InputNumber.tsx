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
      className="rounded border border-gray-400 p-2"
      onChange={props.onChange}
      onFocus={(event) => {
        event.target.select()
      }}
    />
  )
}
