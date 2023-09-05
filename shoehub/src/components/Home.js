import {NavLink} from 'react-router-dom'
import './home.css'
import { FaExclamation } from 'react-icons/fa'

export default function Home(){
    return (
        <>
        <div className='top'>
            <div className='container'>
                <div className='detail'>
                    <h2>The Best Shoe Online Store </h2>
                    <NavLink to='/product' className='productlink'>View more products<FaExclamation /></NavLink>
                </div>
                <div className="image-box">
                    <img src='./images/img/shoe3.png' alt="shopify" width="300" height="300"></img>
                </div>
            </div>
        </div>
        <div className='product-name'>
            <div className='cont'>
                <div className='box'>
                    <div className='image'>
                        <img src='./images/img/shoe.avif' alt='Mobile Phone'></img>



                    </div>
                    <div className='detail'>
                        <p><NavLink to='/product'>Click to view more exciting products</NavLink></p>
                    </div>
                </div>
                <div className='box'>
                    <div className='image'>
                        <img src='./images/img/shoe2.avif' alt='cpu'></img>



                    </div>
                    <div className='detail'>
                        <p><NavLink to='/product'>Click to view more exciting products</NavLink></p>
                    </div>
                </div>
                <div className='box'>
                    <div className='image'>
                        <img src='./images/img/shoe3.avif' alt='smart watch'></img>



                    </div>
                    <div className='detail'>
                        <p><NavLink to='/product'>Click to view more exciting products</NavLink></p>
                    </div>
                </div>
                <div className='box'>
                    <div className='image'>
                        <img src='./images/img/shoe4.avif' alt='Mobile Phone'></img>



                    </div>
                    <div className='detail'>
                        <p><NavLink to='/product'>Click to view more exciting products</NavLink></p>
                    </div>
                </div>
                
                <div className='box'>
                    <div className='image'>
                        <img src="./images/img/shoe5.avif" alt='headphone'></img>



                    </div>
                    <div className='detail'>
                        <p><NavLink to='/product'>Click to view more exciting products</NavLink></p>
                    </div>
                </div>

            </div>
        </div>
        


        </>
    )
}