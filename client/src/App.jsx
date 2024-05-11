import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from 'react-router-dom'
import Cart from "./Pages/Cart"
import Mainpage from "./Pages/Mainpage"
import Layout from './Pages/Layout'
import Notfoundpage from './Pages/Notfoundpage'
import Usememo1 from './Pages/Usememo1'




function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Layout/>}>
<Route index element={<Mainpage/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/memo' element={<Usememo1/>}/>
      </Route>
      <Route path='*' element={<Notfoundpage/>}/>
      </>
    )
  )




  return (

<>

<RouterProvider router={router}/>

</>
  
  
  )
}

export default App
