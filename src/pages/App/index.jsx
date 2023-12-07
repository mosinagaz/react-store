
import { useRoutes, BrowserRouter } from 'react-router-dom'
import {ShoppingCartProvider} from '../../Contex'
import { Home } from '../Home'
import { Layout } from '../../Components/Layout'
import { Navbar } from '../../Components/Navbar'
import { MyAcount } from '../myAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFount } from '../NotFound'
import { SigInd } from '../SigInd'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'
import '../App/App.css'


const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAcount /> },
    { path: '/myorder', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sig-in', element: <SigInd /> },
    { path: '/*', element: <NotFount /> },
  ])
  return routes;
}


const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
          <CheckoutSideMenu/>
        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
