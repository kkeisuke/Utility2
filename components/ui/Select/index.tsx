import { ChangeEvent, FC, memo, SelectHTMLAttributes, useCallback } from 'react'
import styles from './index.module.css'
import { useSelect } from './UseSelect'

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  values?: unknown[]
  onChangeValue?: (event: ChangeEvent<HTMLSelectElement>, value: unknown) => void
}

export const Select: FC<SelectProps> = memo((props) => {
  const { selectProps, findValue, onChangeValue } = useSelect(props)

  const onChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      props.onChange?.(event)
      onChangeValue?.(event, findValue(event.target.value))
    },
    [props, onChangeValue, findValue]
  )

  return (
    <select {...selectProps} className={`${props.className || ''} ${styles.background} p-2 pr-8 rounded border border-gray-400 cursor-pointer appearance-none`.trim()} onChange={onChange}></select>
  )
})

Select.displayName = 'Select'
