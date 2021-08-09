import { VFC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const PageLink: VFC<{ href: string; title: string }> = ({ href, title }) => {
  const router = useRouter()
  const active = href === router.asPath

  return (
    <Link href={href}>
      <a className={`block p-1 text-sm hover:bg-gray-200 ${active ? 'bg-gray-200' : ''}`}>{title}</a>
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
      <li>
        <PageLink href="/dummy_svg" title="Dummy SVG" />
      </li>
    </ul>
  )
}
