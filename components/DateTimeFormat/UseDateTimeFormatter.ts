import { useMemo, useReducer, useState } from 'react'

type DateTimeFormatOptions = Intl.DateTimeFormatOptions

export const OPTIONS: { [K in keyof DateTimeFormatOptions]: DateTimeFormatOptions[K][] } = {
  era: ['long', 'narrow', 'short', undefined],
  year: ['2-digit', 'numeric'],
  month: ['2-digit', 'long', 'narrow', 'numeric', 'short'],
  day: ['2-digit', 'numeric'],
  hour: ['2-digit', 'numeric', undefined],
  hour12: [true, undefined],
  minute: ['2-digit', 'numeric', undefined],
  second: ['2-digit', 'numeric', undefined]
}

const defaultOptions: DateTimeFormatOptions = {
  era: undefined,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: undefined,
  hour12: undefined,
  minute: undefined,
  second: undefined
}

const locales = ['ja', 'ja-JP-u-ca-japanese', 'en'] as const

export const useDateTimeFormatter = () => {
  const [locale, setLocale] = useState<typeof locales[number]>(locales[0])

  const [options, dispatchOption] = useReducer((options: DateTimeFormatOptions, newOptions: Partial<DateTimeFormatOptions>) => {
    return Object.assign({}, options, newOptions)
  }, defaultOptions)

  const code = useMemo(() => {
    return `new Intl.DateTimeFormat('${locale}', ${JSON.stringify(options).replaceAll('"', "'")}).format(new Date())`
  }, [locale, options])

  const changeJapanese = () => {
    setLocale('ja-JP-u-ca-japanese')
    dispatchOption({ month: 'long' })
  }

  const reset = () => {
    setLocale(locales[0])
    dispatchOption(defaultOptions)
  }

  return {
    locale,
    locales,
    setLocale,
    options,
    dispatchOption,
    code,
    changeJapanese,
    reset
  }
}
