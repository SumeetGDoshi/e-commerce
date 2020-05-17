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