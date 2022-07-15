import { FC } from 'react'

export const PageTitle: FC<{ title: string }> = ({ title }) => {
  return <h2 className="mb-2">{title}</h2>
}
