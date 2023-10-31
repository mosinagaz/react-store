import { Home } from '../Home'
import { MyAcount } from '../myAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFount } from '../NotFound'
import { SigInd } from '../SigInd'
import '../App/App.css'


function App() {
  return (
   <div>
      <Home/>
      <MyAcount/>
      <MyOrder/>
      <MyOrders/>
      <NotFount/>
      <SigInd/>
   </div> 
  )
}

export default App
