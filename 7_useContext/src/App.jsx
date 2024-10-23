import "./App.css";
import Cart from "./Components/Cart/Cart";
import Product from "./Components/Products/Product";

function App() {
  return (
    <>
      <Product itemName="Iphone 13" itemPrice={69999} />
      <Product itemName="Iphone 14" itemPrice={79999} />
      <Product itemName="Iphone 15" itemPrice={89999} />
      <Product itemName="Iphone 16" itemPrice={94999} />
      <hr />
      <Cart />
    </>
  );
}

export default App;
