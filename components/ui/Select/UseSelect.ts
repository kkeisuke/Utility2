import { SelectProps } from '.'

export const useSelect = (props: SelectProps) => {
  const { onChangeValue, values, ...selectProps } = props

  const valueMap = new Map<string, unknown>()
  values?.forEach((val) => valueMap.set(String(val), val))

  const findValue = (key: string) => valueMap.get(key)

  return {
    selectProps,
    findValue,
    onChangeValue
  }
}
