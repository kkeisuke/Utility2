import { VFC } from 'react'
import Link from 'next/link'
import { FaHome, FaGithub, FaTwitter } from 'react-icons/fa'

export const Header: VFC = () => {
  return (
    <header className="fixed top-0 left-0 p-2 w-full text-white bg-gray-600">
      <div className="flex justify-between items-center">
        <h1>
          <Link href="/">Utility</Link>
        </h1>
        <div className="flex gap-2 items-center">
          <Link href="https://kkeisuke.com/">
            <a target="_blank">
              <FaHome />
            </a>
          </Link>
          <Link href="https://github.com/kkeisuke/Utility2">
            <a target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </Link>
          <Link href="https://twitter.com/kkeisuke">
            <a target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}
