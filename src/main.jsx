import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Login from './Pages/Login'
import ProtectedRoutes from './components/ProtectedRoutes'
import Register from './Pages/Register'
import SingleProduct from './Pages/SingleProduct'
import CartPage from './Pages/CartPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Login />,
      },
      {
        path: 'products',
        element: <ProtectedRoutes component={<Products />}/>,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'product/:id',
        element: <SingleProduct />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
    ]
  }
])













createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>,

)
