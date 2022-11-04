import { FC } from 'react'
import Link from 'next/link'
import { FaHome, FaGithub, FaTwitter } from 'react-icons/fa'

export const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-600 p-2 text-white">
      <div className="flex items-center justify-between">
        <h1>
          <Link href="/">Utility</Link>
        </h1>
        <div className="flex items-center gap-2">
          <Link href="https://kkeisuke.com/" target="_blank">
            <FaHome />
          </Link>
          <Link href="https://github.com/kkeisuke/Utility2" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </Link>
          <Link href="https://twitter.com/kkeisuke" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </Link>
        </div>
      </div>
    </header>
  )
}
