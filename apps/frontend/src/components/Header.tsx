import { routes } from '@/config/routes'
import type { ComponentProps } from 'react'
import { Link, useLocation } from 'wouter'

interface HeaderProps extends ComponentProps<'header'> {}

export function Header({ className, ...props }: HeaderProps) {
  const [location] = useLocation()

  const visibleRoutes = routes.filter((route) => !route.hidden)

  return (
    <header className={className} {...props}>
      <nav className="flex h-12 bg-[#673ab8]">
        {visibleRoutes.map(({ name, path }) => (
          <Link
            key={path}
            className={`block p-3 hover:bg-black/50 ${location === path ? 'bg-black/20' : ''}`}
            to={path}
          >
            {name}
          </Link>
        ))}
      </nav>
    </header>
  )
}
