import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Product from '../Products/Product.js'


export default function Rout(){
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/product" element={<Product />}/>

        </Routes>
        </>
    )
}