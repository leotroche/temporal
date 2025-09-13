import { lazy, type JSX, type LazyExoticComponent } from 'react'

interface AppRoute {
  name: string
  path: string
  component: LazyExoticComponent<() => JSX.Element>
  hidden?: boolean
}

export const routes: AppRoute[] = [
  {
    name: 'Home',
    path: '/',
    component: lazy(() => import('@/pages/Home')),
  },
  {
    name: 'About',
    path: '/about',
    component: lazy(() => import('@/pages/About')),
  },
  {
    name: '404',
    path: '*',
    component: lazy(() => import('@/pages/_404')),
    hidden: true,
  },
] as const
