import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './components/Cart'
import Navbar from "./components/Navbar"
import ProductReview from './components/ProductReview'

const App = () => {
  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/review' element={<ProductReview/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App