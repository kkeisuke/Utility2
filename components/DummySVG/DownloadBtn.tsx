import { FC } from 'react'

export const DownloadBtn: FC<{ href: string; download: string }> = ({ href, download, children }) => {
  return (
    <a href={href} download={download} className="rounded bg-green-600 py-2 px-4 text-white hover:bg-green-500">
      {children}
    </a>
  )
}
