import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Product from '../Products/Product.js'
import Cart from '../Cart'
import { CartProvider } from 'react-use-cart'


export default function Rout(){
    return (
        <>
        <Routes>
            
            <Route path="/" element={<Home />}/>
            <Route path="/product" element={<Product />}/>
            <Route path="/cart" element={<Cart />}/>
        

        </Routes>
        </>
    )
}