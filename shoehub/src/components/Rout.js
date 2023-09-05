import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Product from '../Products/Product.js'
import Cart from '../Cart'
import { CartProvider } from 'react-use-cart'
import { useState } from 'react'
import About from "./About"


export default function Rout(){
    const [show, setShow] = useState(true)
    return (
        <>
        <Routes>
            
            <Route path="/" element={<Home />}/>
            <Route path="/product" element={show ? <Product />: "Cart"}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/about" element={<About />}/>
        

        </Routes>
        </>
    )
}