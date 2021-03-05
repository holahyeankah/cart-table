import React, {Component} from 'react';
import './App.css';
import GroceryItem from './GroceryItem';
import GroceryCart from './GroceryCart'



class App extends Component {
    constructor(props){
        super(props);
        this.state={
            cart:[],
            quantity:1
        }
        // this.addToCart=this.addToCart.bind(this);
        // this.removeFromCart=this.removeFromCart.bind(this);
        // this.onQuantityChange=this.onQuantityChange.bind(this);
        
    };
    

    
     

   
    // addToCart(item){
    
    //   if(this.state.cart.indexOf(item)>-1){
    //     return "item already exist";

    //   };
    //   this.setState((prevState)=>{
    //     return {
    //       cart:prevState.cart.concat(item)
    //     }
    //   })

    //  }
      
   

    //  removeFromCart(itemToRemove){
    
    //    this.setState((prevState)=>({
    //     cart:prevState.cart.filter(item=>{
    //       console.log("sodik", item);
    //        return itemToRemove !== item
    //      })
    //    }))
    //    }
     


     onQuantityChange(e, index){
     
       const {cart} =this.state;
     cart[index].quantity=e.target.value;
     this.setState({cart})
     

     }







  render(){
      const {cart}=this.state;
    return (
      <div className="App-container">
        <div className="header">
        <h1>My React App template</h1>
          <h4>Welcome to my React template</h4>
          </div>
             <GroceryItem addTocart={this.addToCart} quantity={this.state.quantity} quantityChange={this.onQuantityChange}/>
          <GroceryCart item={cart} quantity={this.state.quantity} handleRemove={this.removeFromCart} />  
          
      </div>
    );

  }
  
}

export default App;
