import { useState } from 'react'
import './App.css'
import Navbar from './page_psrts/nav_foot/navbar'

function App() {

  const routes = [
    {
      id:1,
      path:'/',
      element:'',
    },
  ]

  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
