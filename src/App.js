import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers (){
  return(
    <div>
      <h2>External Users</h2>
    </div>
  )
}


function Counter(){
  const [count, setCount] = useState(55);  // Initial state

  const increaseCount = () =>setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  

  // const increaseCount = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
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
