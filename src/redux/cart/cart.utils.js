export const addItemToCart=(existingCartItem,newCartItem)=>{
    const isExistingRepeat=existingCartItem.find(existItem=>
            existItem.id === newCartItem.id
        );
        if(isExistingRepeat){
            return existingCartItem.map( item=>
                item.id ===newCartItem.id?
                {...item,quantity:item.quantity+1}
                :item
                )
        }
        return [...existingCartItem,{...newCartItem,quantity:1}]
}

export const removeCartItem=(cartItems,cartItemToRemove)=>{
    const existingItem = cartItems.find(cartItem=>cartItem.id===cartItemToRemove.id)

    if(existingItem.quantity===1){
       return cartItems.filter(cartItem=>cartItem.id!==cartItemToRemove.id)
    }

    return cartItems.map(cartItem=>
        cartItem.id===cartItemToRemove.id?
        {...cartItem,quantity:cartItem.quantity - 1}
        :cartItem
        )
}