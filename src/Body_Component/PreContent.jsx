import React from 'react';
import sybko from '../Assets/startYourBKOrder.png'
import cart from '../Assets/CartImg.png'
import scooter from '../Assets/scooter.svg'
import gif from '../Assets/Gif.webp'
export default class extends React.Component{
    render(){
        return(
        <div id='mainDiv1'>
            <div id='preFirstDiv'>
                <img src={sybko} alt="" id='sybko'/><br />
                <button className='twoBut' id='but1'> <img src={cart} alt="" />&nbsp;&nbsp;Order PickUp</button><br />
                <button className='twoBut' id='but2'><img src={scooter} alt="" id='scooter1'/>&nbsp;&nbsp;Order Delivery</button>
            </div>
            <div id='gif'>
                <img src={gif} alt="" />
            </div>
         </div>
            
            
        )
    }
}