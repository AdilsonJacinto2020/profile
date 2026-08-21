import { Outlet, useNavigation, ScrollRestoration } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function RootLayout() {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  return (
    <div className="min-h-screen bg-bg text-fg flex flex-col transition-colors duration-200">
      <ScrollRestoration />
      
      {/* Top Loading Bar indicator for data routers */}
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-accent/20">
          <div className="h-full bg-accent animate-pulse w-2/3" />
        </div>
      )}

      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
