import { ChangeEvent, useCallback } from 'react'
import { FC } from 'react'
import { Button } from '../ui/Button'
import { Select } from '../ui/Select'
import { useDateTimeFormatter, OPTIONS } from './UseDateTimeFormatter'

export const DateTimeFormatter: FC = () => {
  const { locale, setLocale, locales, options, dispatchOption, code, changeJapanese, reset } = useDateTimeFormatter()

  const onChangeLocale = useCallback((event: ChangeEvent<HTMLSelectElement>) => setLocale(event.target.value as typeof locales[number]), [setLocale])
  const onChangeOption = useCallback((event: ChangeEvent<HTMLSelectElement>, value: unknown) => dispatchOption({ [event.target.id]: value }), [dispatchOption])

  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor="locale">locale</label>
        <Select name="locale" id="locale" value={locale} className="max-w-fit" onChange={onChangeLocale}>
          {locales.map((locale) => (
            <option value={locale} key={locale}>
              {locale}
            </option>
          ))}
        </Select>
      </div>
      <div className="mt-3 flex flex-wrap gap-4">
        {(Object.keys(OPTIONS) as (keyof typeof OPTIONS)[]).map((key) => {
          return (
            <div key={key} className="flex flex-col">
              <label className="mb-1" htmlFor={key}>
                {key}
              </label>
              <Select name={key} id={key} value={String(options[key])} values={OPTIONS[key]} onChangeValue={onChangeOption}>
                {OPTIONS[key]?.map((value) => (
                  <option value={String(value)} key={`${key}-${value}`}>
                    {String(value)}
                  </option>
                ))}
              </Select>
            </div>
          )
        })}
      </div>
      <div className="mt-6 flex gap-3">
        <Button type="button" onClick={changeJapanese}>
          Japanese
        </Button>
        <Button type="button" color="secondary" onClick={reset}>
          reset
        </Button>
      </div>
      <pre className="mt-12 p-3 overflow-auto bg-gray-100 cursor-pointer" onClick={useCallback(() => window.navigator?.clipboard.writeText(code), [code])}>
        {code}
      </pre>
      <p className="mt-4">{new Intl.DateTimeFormat(locale, options).format(new Date())}</p>
    </div>
  )
}
