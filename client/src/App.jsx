import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Sample from './Pages/Sample'
import Hello from './Pages/Hello'
import Userreducer from './Pages/Userreducer'



function App() {

  console.log("hello hello");
  
  const rijo=createBrowserRouter([
    {
      path:'/',
      element:<Sample />
    },
    {
      path:'hello',
      element:<Hello/>
    },
    {
      path:"reducer",
      element:<Userreducer/>
    }
  
   
  ])


  return (

     <RouterProvider router={rijo}></RouterProvider>


  
  )
}

export default App
