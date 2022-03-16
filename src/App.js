import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Product name="Laptop" price="47000"></Product>
      <Product name="phone" price="7500"></Product>
      <Product name="Watch" price="3500"></Product>
    </div>
  );
}

// Create a product component
function Product(props){
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
