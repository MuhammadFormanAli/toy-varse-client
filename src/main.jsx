import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<div className='max-w-[1250px] m-auto'>
<React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
</div>
)
