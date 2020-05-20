import React from 'react';
import CustomButton from'../custom-button/custom-button.component';
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'

import './cart-dropdown.styles.scss';

const CartDropdown =({cartItems})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(item=><CartItem key={item.id} item={item}/>)}
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
);
const mapStateToProps=createStructuredSelector({
    cartItems: selectCartItems
})
export default connect(mapStateToProps) (CartDropdown);