import './App.css';
import AddProductForm from './Component/addProduct';
import ProductList from './Component/showproducts';




function App() {
  return (
    <div>  
     <div id='addproduct' >Add New Laptop Product</div>
     <AddProductForm />
     <div id='addproduct' >Products List Product</div>
     <ProductList/>
    </div>
  );
}

export default App;
