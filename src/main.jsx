import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Signup from "./Pages/Signup.jsx"
import Login from "./Pages/Login.jsx"
import ProfileSetup  from './Pages/ProfileSetup.jsx'
import UserProfile from './Pages/UserProfile.jsx'

const router = createBrowserRouter([
  {path:"/" , element:<App />},
  {path:"/signup" , element: <Signup />},
  {path:"/login" , element: <Login />},
  {path:'/profilesetup' , element: <ProfileSetup />},
  {path:'/userprofile' , element: <UserProfile />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
