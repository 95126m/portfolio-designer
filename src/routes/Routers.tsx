import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/layouts/Layout'
import Home from '@/pages/Home'
import Works from '@/pages/Works'
import Overview from '@/pages/Overview'
import About from '@/pages/About'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'works', element: <Works /> },
      { path: 'overview', element: <Overview /> },
      { path: 'about', element: <About /> },
    ]
  }
])

export default router
