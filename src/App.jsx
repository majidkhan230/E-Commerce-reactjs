import React from 'react'
import Home from './pages/Home'
import { Outlet } from 'react-router-dom'
import TopHeader from './components/common/TopHeader'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Line from './components/common/Line'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      
      <TopHeader/>
      <Header/>
      <Line/>
 <Outlet/>
 <Footer/>
 <ToastContainer />
    </div>
  )
}

export default App
