import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserInfoContextprovider } from './Pages/Context.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(

<UserInfoContextprovider>
<App />
</UserInfoContextprovider>




  

)
