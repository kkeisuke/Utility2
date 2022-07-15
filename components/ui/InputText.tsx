import { ChangeEventHandler, FC } from 'react'

type InputTextProps = {
  value: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const InputText: FC<InputTextProps> = (props) => {
  return <input type="text" value={props.value} className="rounded border border-gray-400 p-2" onChange={props.onChange} />
}
