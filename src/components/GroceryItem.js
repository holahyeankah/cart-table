import React, {Component} from 'react';
import './GroceryItem.css';
import {connect} from 'react-redux';
import {addCart, addQuantity, removeQuantity} from './cartAction';

  class GroceryItem extends Component{
    constructor(props){
      super(props);
      
    }
    
    handleCart=(item,quantity)=>{
      const{addCart}=this.props;

      const list={item, quantity}
        addCart(list) 
    
    }

      render(){
        const{items}=this.props;
          return(
              <div className="grocery-item">
                   <table border="1">
                       <tbody>
          <tr>
              <th></th>
              <th>Id</th>
            <th>Item Price</th>
            <th>Item Name</th>
            
               </tr>
   
        {
         items.map((item, index)=>{
         
           return <tr key={index} id={index} >
              
            <td>
            <button onClick={()=>this.handleCart(item)}>
           Add 
            </button>
            </td>
            <td>{item.id}</td>
             <td>{item.price}</td>
               <td>{item.name}</td>
               
         <td>
           <button onClick={()=>this.props.removeQuantity(index)}>
             {' '}
              -{' '}
           </button>
         </td>
         <td>
           <button onClick={()=>this.props.addQuantity(index)}>
             {' '}
              +{' '}
           </button>
         </td>
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
       items:state.forsale,
      
    }
};
const mapDispatchToProps=(dispatch)=>{
  return {

      addCart:(payload)=>{dispatch(addCart(payload))},
      addQuantity:(index)=>{dispatch(addQuantity(index))},
      removeQuantity:(index)=>{dispatch(removeQuantity(index))}
  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryItem);