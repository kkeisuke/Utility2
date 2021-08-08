import { ChangeEventHandler, VFC } from 'react'

type InputTextProps = {
  value: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const InputText: VFC<InputTextProps> = (props) => {
  return <input type="text" value={props.value} className="p-2 border border-gray-400" onChange={props.onChange} />
}
