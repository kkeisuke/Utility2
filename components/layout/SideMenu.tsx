import { VFC } from 'react'
import Link from 'next/link'

const PageLink: VFC<{ href: string; title: string }> = ({ href, title }) => {
  return (
    <Link href={href}>
      <a className="block p-1 text-sm hover:bg-gray-300">{title}</a>
    </Link>
  )
}

export const SideMenu: VFC = () => {
  return (
    <ul>
      <li>
        <PageLink href="/" title="Home" />
      </li>
      <li>
        <PageLink href="/sql_format" title="SQL format" />
      </li>
      <li>
        <PageLink href="/json_format" title="JSON format" />
      </li>
    </ul>
  )
}
