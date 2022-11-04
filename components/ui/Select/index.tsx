import { FC, memo, SelectHTMLAttributes } from 'react'
import styles from './index.module.css'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>

export const Select: FC<SelectProps> = memo((props) => {
  return <select {...props} className={`${props.className || ''} ${styles.background} p-2 pr-8 rounded border border-gray-400 cursor-pointer appearance-none`.trim()}></select>
})

Select.displayName = 'Select'
