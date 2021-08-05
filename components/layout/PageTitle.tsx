import { VFC } from 'react'

export const PageTitle: VFC<{ title: string }> = ({ title }) => {
  return <h2 className="mb-2">{title}</h2>
}
