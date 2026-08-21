import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import HomePage, { homeLoader } from './pages/HomePage'
import ProjectDetailPage, { projectLoader } from './pages/ProjectDetailPage'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: 'projetos/:id',
        element: <ProjectDetailPage />,
        loader: projectLoader,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
