import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Statistics from './pages/Statistics'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import { Toaster } from 'react-hot-toast'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import { ThemeProvider } from './context/ThemeContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "dashboard/cart",
        element: <Dashboard />,
      },
      {
        path: "dashboard/wishlist",
        element: <Dashboard />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "product/:product_id",
        element: <ProductDetails />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <RouterProvider router={router} />
          <Toaster />
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
)
