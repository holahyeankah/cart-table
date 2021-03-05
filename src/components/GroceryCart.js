import React, {Component} from 'react';
import './GroceryCart.css';
import {connect} from "react-redux";
import {removeFromCart} from './cartAction'


  class GroceryCart extends Component{
      render(){
        const{cart}=this.props
        
        if(cart.length === 0 ){
          return <div>
            <p>Cart is empty</p>
          </div>
        }
          return(
              <div className="grocery-cart">
                   <table border="1">
                       <tbody>
          <tr>
              <th></th>
              <th>Id</th>
            <th>Item Price</th>
            <th>Item Name</th>
            <th>Item Quantity</th>
            <th>Final price</th>
               </tr>
         {this.props.cart.map((product, index)=>{
           return <tr key={index} >
            <td>
            <button onClick={()=>this.props.removeFromCart(index)}>
             Remove
            </button>
            </td>
            {product.item.item.id}
             <td>{product.item.item.price}</td>
               <td>{product.item.item.name}</td>
               <td>{ product.quantity }</td>
               <td>{ Math.round(product.item.item.price * product.quantity) }</td>
           </tr>
         })}
         </tbody>
        </table>
              </div>

          )
      }
  }
  const mapStateToProps=(state)=>{

    return{
       cart:state.cart,
      
    }
};
const mapDispatchToProps=(dispatch)=>{
  return {

      removeFromCart:(index)=>{dispatch(removeFromCart(index))},
  
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GroceryCart);