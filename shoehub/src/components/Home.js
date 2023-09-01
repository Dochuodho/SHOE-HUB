import {NavLink} from 'react-router-dom'
import './home.css'
export default function Home(){
    return (
        <>
        <div className='top'>
            <div className='container'>
                <div className='detail'>
                    <h2>The Best Shoe Online Store </h2>
                    <NavLink to='/product' className='productlink'>Shop Now</NavLink>
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
                        <img src='./images/img/b7.png' alt='Mobile Phone'></img>



                    </div>
                    <div className='detail'>
                        <p><NavLink to='/product'>Click for more</NavLink></p>
                    </div>
                </div>
                <div className='box'>
                    <div className='image'>
                        <img src='./images/img/b7.png' alt='cpu'></img>



                    </div>
                    <div className='detail'>
                        <p>63 Products</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='image'>
                        <img src='./images/img/b7.png' alt='smart watch'></img>



                    </div>
                    <div className='detail'>
                        <p>18 Products</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='image'>
                        <img src='./images/img/b7.png' alt='Mobile Phone'></img>



                    </div>
                    <div className='detail'>
                        <p>23 Products</p>
                    </div>
                </div>
                
                <div className='box'>
                    <div className='image'>
                        <img src="./images/img/b7.png" alt='headphone'></img>



                    </div>
                    <div className='detail'>
                        <p>52 Products</p>
                    </div>
                </div>

            </div>
        </div>
        


        </>
    )
}