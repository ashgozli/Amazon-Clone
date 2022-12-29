import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ad' src="https://blog.hubspot.com/hubfs/Banner%20Ads%20Explained%20in%20500%20Words%20or%20Less.png"
                    alt="" />
                <div>
                    <h2 className='checkout_title'>
                        Your Shopping Cart
                    </h2>

                    {/* BasketItems */}
                </div>
            </div>
            <div className='checkout_right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout