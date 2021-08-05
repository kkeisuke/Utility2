import { FC } from 'react'
import { Header } from './Header'
import { SideMenu } from './SideMenu'

export const Layout: FC = ({ children }) => {
  return (
    <div className="flex gap-6 pt-16 px-6 pb-6">
      <Header />
      <aside className="sticky top-16 h-full">
        <SideMenu />
      </aside>
      <main className="flex-1 min-w-0">{children}</main>
    </div>
  )
}
