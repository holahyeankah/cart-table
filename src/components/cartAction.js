import {ADD_TO_CART, REMOVE_FROM_CART, ADD_QUANTITY, SUBTRACT_QUANTITY} from './cartTypes';

export const addCart=(item )=>({
    type:ADD_TO_CART,
    payload:{
        item, 
        quantity:1
       
        
    }
})

export const removeFromCart=(index)=>({
    type:REMOVE_FROM_CART,
    index
})

export const addQuantity=(index)=>({
    type:ADD_QUANTITY,
    index,
    
})
export const removeQuantity=(index)=>({
    type:SUBTRACT_QUANTITY,
    index,
    
})

