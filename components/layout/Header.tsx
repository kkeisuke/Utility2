import { VFC } from 'react'
import Link from 'next/link'

export const Header: VFC = () => {
  return (
    <header className="fixed top-0 left-0 p-2 w-full text-white bg-gray-600">
      <h1>
        <Link href="/">Utility</Link>
      </h1>
    </header>
  )
}
