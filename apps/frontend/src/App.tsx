import { routes } from '@/config/routes'
import { MainLayout } from '@/layouts/MainLayout'
import { Suspense } from 'react'
import { Route, Switch } from 'wouter'

function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route key={path} path={path} component={component} />
        ))}
      </Switch>
    </Suspense>
  )
}

export function App() {
  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  )
}
