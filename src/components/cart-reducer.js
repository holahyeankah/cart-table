import {ADD_TO_CART, REMOVE_FROM_CART,  ADD_QUANTITY, SUBTRACT_QUANTITY} from './cartTypes';

const Grocery_Items=[

    { id: 1, name: "creamy butter", price:39.20},
    { id:2, name: "Round steak", price:25.40},
    { id:3,name: "Potatoes", price:90.23},
    {id:4, name: "Frozen turkey", price:78.10},
    {id:5, name: "White rice", price:28.40},
    {id:6,name: "Sugar", price:90.30},
    {id:7,name: "Ice-cream", price:56.20},
    {id:8,name: "Groundnut", price:60.30},
    {id:9,name: "Rice", price:45.30},
    {id:10,name: "Beans", price:34.20},
    {id:11, name: "Beaf", price:30.20}, 
    {id:12,name: "Garri", price:10.50},
    {id:13,name: "Vegetable", price:38.10},
  
  
  ];



export const cartReducer=(state, action)=>{
    if(state === undefined){
        return{
            forsale:Grocery_Items,
              cart:[]

        }
        
    }
    switch(action.type){
        case ADD_TO_CART:{
            const cart=[...state.cart, action.payload]
         return {
             ...state,
            cart
          
           
         }
        }
        
         case REMOVE_FROM_CART:{
            const cart=[...state.cart];
            cart.splice(action.index, 1)
            return{
                ...state,
                cart
            }
         }
         case ADD_QUANTITY:
         return{
             ...state,
             cart:state.cart.map((product, i)=>i === action.index
               
                 ? {...product,
                quantity: product.quantity +1 } : product
             )
         }
         case SUBTRACT_QUANTITY:
             return{
                 ...state,
                 cart:state.cart.map((product, i)=> i===action.index
                 ? {...product, quantity:product.quantity !==1 ? product.quantity -1 : 1}: product)
             }        
         
          
            
         
        
         default:
            return state
        }
       
        

}

export default cartReducer;