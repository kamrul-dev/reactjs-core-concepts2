import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}


function Counter(){
  const abc = useState(55);
  console.log(abc);
  return (
    <div>
      <h1>Count: </h1>
      <button>Increase</button>
    </div>
  )
}

/* 
  const products = [
    {name: 'laptop', price: 53000},
    {name: 'phone', price: 9300},
    {name: 'watch', price: 3300},
    {name: 'tablet', price: 20000},
  ]

*/

/* 
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      <Product name="Laptop" price="47000"></Product>
      <Product name="phone" price="7500"></Product>
      <Product name="Watch" price="3500"></Product>
*/

// Create a product component
function Product(props) {
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
