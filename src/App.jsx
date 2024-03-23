import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Landing from './compoments/Landpage'
import Dashboard from './compoments/Dashboard'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
// import './App.css'

function App() {
     
 
  return (
    <>
      
     
     <BrowserRouter>
     <Appbar></Appbar>

    
     <Routes>

     <Route path="/dashboard" element={<Dashboard/>}></Route>
     <Route path='/' element = {<Landing/>}></Route>

     </Routes>
     
     </BrowserRouter>
    </>
  )
}

const Appbar = memo(()=>{

  const navigate = useNavigate()

  return(
    <>

    <div>
     <button onClick={()=>navigate("/dashboard")}>Dashboard</button>
     <button onClick={()=>navigate( "/")}>Landing</button>
     </div>
    
    </>

  )
})

export default App
