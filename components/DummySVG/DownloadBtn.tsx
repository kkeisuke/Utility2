import { FC } from 'react'

export const DownloadBtn: FC<{ href: string; download: string }> = ({ href, download, children }) => {
  return (
    <a href={href} download={download} className="py-2 px-4 text-white bg-green-600 hover:bg-green-500 rounded">
      {children}
    </a>
  )
}
